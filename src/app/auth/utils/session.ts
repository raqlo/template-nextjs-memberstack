import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {DEFAULT_LOGOUT_URL, NON_AUTH_FALLBACK_SLUG} from "@/app/auth/utils/enums";

const memberAuthTokenName = '_ms-mid';

export async function verifySession(redirectUnauth: boolean = false) {
  const cookieStore = await cookies();
  const session = cookieStore.get(memberAuthTokenName)?.value;
  if (!session) {
    if (redirectUnauth) {
      redirect(NON_AUTH_FALLBACK_SLUG);
    }
    return null;
  }
  return session;
}

export async function createSession({
  token,
  expires,
  sameSite,
}: {
  token: string;
  domain?: string;
  expires?: number;
  sameSite?: 'strict' | 'lax';
}) {
  const expirationInSeconds = expires && getSessionDurationSeconds(expires);

  const cookieStore = await cookies();
  cookieStore.set(memberAuthTokenName, token, {
    sameSite,
    path: '/',
    maxAge: expirationInSeconds || 60 * 60 * 24 * 14,
  });
}

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

export function getSessionDurationSeconds(unixTimestampMillis: number) {
  const now = Date.now();
  const differenceMillis = unixTimestampMillis - now;
  return Math.max(0, Math.floor(differenceMillis / 1000)); // Convert to seconds, ensure non-negative
}
