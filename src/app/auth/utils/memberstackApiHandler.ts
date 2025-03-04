import { verifySession } from '@/app/auth/utils/session';
import { AuthError } from '@/app/auth/utils/errors';

const API_ENDPOINT = `https://client.memberstack.com`;

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

  async request<TResponse>(params: {
    method: string;
    routeParams: string;
    body?: unknown;
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
        credentials: 'include',
      });

      // Parse the response data
      const resData = await res.json();

      if (res.ok) {
        return {
          type: 'success',
          data: resData.data as TResponse,
        };
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
      if (e instanceof AuthError)
        return {
          type: 'error',
          data: e.message,
        };

      // if error is unknown it will throw a server 500 error
      throw e;
    }
  }
}

export { MemberstackApiHandler };
