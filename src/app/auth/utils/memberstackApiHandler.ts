import {
  verifySession,
  getSessionDurationDays,
  deleteSession,
  createSession,
} from '@/app/auth/utils/session';
import { Payload } from '@memberstack/dom/lib/types/utils/payloads';
import Transforms = Payload.Transforms;
import { AuthError, ServerError } from '@/app/auth/utils/errors';

const API_ENDPOINT = `https://client.memberstack.com`;

type Response<T> = {
  data: T;
};

type ErrorResponse = {
  message: string;
};


export type ActionResponse<T> =
    | {
  type: 'error';
  data: string; // If "error", `data` is a string.
}
    | {
  type: 'success';
  data: T; // If "success", `data` is the generic `T`.
};


class MemberstackApiHandler {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor() {
    this.baseUrl = API_ENDPOINT;
    this.apiKey = process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY ?? '';

    if (!this.apiKey) {
      throw new Error('API key is missing from environment variables.');
    }
  }

  async request<
    TResponse extends Response<Payload.Transforms[keyof Transforms]>,
  >(params: {
    method: string;
    routeParams: string;
    body?: unknown;
    cookies?: TResponse['data'] extends Payload.Transforms['MemberAuth']
      ? 'set'
      : 'delete' | 'none';
  }): Promise<ActionResponse<TResponse>> {
    try {
      // Get the user's token
      const token = await verifySession(false);
      const headers = {
        authorization: `Bearer ${token}`,
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json',
      };

      // Make the request to the API
      const res = await fetch(`${this.baseUrl}/${params.routeParams}`, {
        method: params.method,
        headers: headers,
        body: params.body ? JSON.stringify(params.body) : undefined,
      });

      // Parse the response data
      const resData = (await res.json()) as TResponse;

      if (res.ok) {
        if (params.cookies === 'set') {
          this.assertMemberAuthResponse(resData);

          if (resData.data.tokens) {
            const { accessToken, expires } = resData.data.tokens;

            // Set cookies for the authenticated user
            await createSession({
              token: accessToken,
              expires: getSessionDurationDays(expires),
            });
          } else {
            new ServerError('Missing token or expiration in the response.');
          }
        } else if (params.cookies === 'delete') {
          await deleteSession();
        } else if (params.cookies === 'none' || !params.cookies) {
          // No cookie action needed
        }

        return {
          type: 'success', data: resData };
      }
      if (res.status >= 400 || res.status < 500) {
        throw new AuthError(
          `${(resData as unknown as ErrorResponse).message}`,
          res.status,
        );
      }

      throw new Error('An unknown error occurred.');
    } catch (e) {
      // if Memberstack handles the error a message will be shown in the frontend
      if(e instanceof AuthError)
        return {
          type: 'error',
          data: e.message,
        }
      // if error is unknown it will throw a server 500 error
      throw e;
    }
  }

  private assertMemberAuthResponse(
    resData: Response<unknown>,
  ): asserts resData is Response<Payload.Transforms['MemberAuth']> {
    if (!(resData.data as Payload.Transforms['MemberAuth']).tokens) {
      throw new Error('Invalid MemberAuth response structure.');
    }
  }
}

export { MemberstackApiHandler };
