'use server';

import {
  SignupMemberEmailPasswordParams,
  SignupMemberEmailPasswordPayload,
} from '@memberstack/dom';
import { MemberstackApiHandler } from './utils/memberstackApiHandler';

const memberstackApiHandler = new MemberstackApiHandler();

export const signupWithPassword = async ({
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
  return await memberstackApiHandler.request<SignupMemberEmailPasswordPayload>({
    method: 'POST',
    routeParams: formattedUrl,
    body,
    cookies: 'set',
  });
};
