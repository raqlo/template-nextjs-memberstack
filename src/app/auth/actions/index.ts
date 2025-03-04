'use server';

import {
  SignupMemberEmailPasswordParams,
  SignupMemberEmailPasswordPayload,
} from '@memberstack/dom';
import { MemberstackApiHandler } from '@/app/auth/utils/memberstackApiHandler';
import {
  createSession,
} from '@/app/auth/utils/session';

/**
 * Its primary role is to handle **server-side interactions with the Memberstack API**, enabling you to manage tasks commonly handled by Memberstack DOM on the frontend. It provides a centralized and efficient way to handle operations such as:
 * - **Authentication**
 * - **Current user custom fields management**
 * - **Memberships**
 * - **Other Memberstack API-based functionalities found in https://developers.memberstack.com/docs/dom-front-end-package**
 *
 * By using this instance, you can perform API requests and process responses on the server, abstracting away the complexities of direct API integration.
 *
 * @example <caption>Creating an action using memberstackApiHandler</caption>
 *
 * // Import the necessary types and the class instance
 * import { MemberstackApiHandler } from './utils/memberstackApiHandler';
 * import { SignupMemberEmailPasswordParams, SignupMemberEmailPasswordPayload } from '@memberstack/dom';
 *
 * // Create an instance of the MemberstackApiHandler
 * const memberstackApiHandler = new MemberstackApiHandler();
 *
 * // Define a new server-side action for signing up a user
 * export const signupEmailWithPasswordAction = async ({
 *   email,
 *   password,
 *   customFields,
 *   metaData,
 *   captchaToken,
 *   plans,
 * }: SignupMemberEmailPasswordParams): Promise<SignupMemberEmailPasswordPayload> => {
 *   // Set the API endpoint
 *   const formattedUrl = 'auth/signup'; // Replace with desired endpoint
 *
 *   // Define the request body
 *   const body = {
 *     email,
 *     password,
 *     customFields,
 *     metaData,
 *     captchaToken,
 *     plans,
 *   };
 *
 *   // Use the handler to make the API request
 *   return await memberstackApiHandler.request<SignupMemberEmailPasswordPayload>({
 *     method: 'POST', // HTTP method
 *     routeParams: formattedUrl, // API route
 *     body, // Request payload
 *     cookies: 'set', // Optional cookie handling (e.g., 'set' or 'remove')
 *   });
 * };
 */

const memberstackApiHandler = new MemberstackApiHandler();

export const signupEmailWithPasswordAction = async ({
  email,
  password,
  customFields,
  metaData,
  captchaToken,
  plans,
}: SignupMemberEmailPasswordParams) => {
  const formattedUrl = `auth/signup`;
  const body = {
    email,
    password,
    customFields,
    metaData,
    captchaToken,
    plans,
  };
  const res = await memberstackApiHandler.request<
    SignupMemberEmailPasswordPayload['data']
  >({
    method: 'POST',
    routeParams: formattedUrl,
    body,
  });

  if (res.type === 'success') {
    // Set cookies for the authenticated user
    await createSession({
      token: res.data.tokens.accessToken,
      // expires: getSessionDurationDays(res.data.tokens.expires),
      sameSite: 'lax',
      expires: res.data.tokens.expires
    });
  }
  return res;
};
