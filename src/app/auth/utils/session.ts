import 'server-only'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const memberAuthTokenName = '_ms-mid';
export const NON_AUTH_FALLBACK_SLUG = '/login'; // Redirect route if the user is not authenticated
export const DEFAULT_LOGIN_URL = '/dashboard'; // Redirect route if the user is authenticated
export const DEFAULT_LOGOUT_URL = '/'; // Redirect route if the user is authenticated

export const verifySession = async (redirectUnauth: boolean = false) => {
  const cookieStore = await cookies();

  const session = cookieStore.get(memberAuthTokenName)?.value;
  if (!session) {
    if (redirectUnauth) redirect(NON_AUTH_FALLBACK_SLUG);
    return null;
  }
  return session;
};

export const createSession = async ({
  token,
  domain,
  expires,
}: {
  token: string;
  domain?: string;
  expires?: number;
}) => {
  const cookieStore = await cookies();
  cookieStore.set(memberAuthTokenName, token, {
    expires: (expires && Number(expires)) || 14,
    sameSite: 'strict',
    domain,
  });
};

export const deleteSession = async () => {
  const cookieStore = await cookies();

  cookieStore.delete(memberAuthTokenName);
  redirect(DEFAULT_LOGOUT_URL);
};

export function getSessionDurationDays(unixTimestampMillis: number) {
  const now = Date.now();
  const differenceMillis = unixTimestampMillis - now;
  return Math.ceil(differenceMillis / (24 * 60 * 60 * 1000));
}
