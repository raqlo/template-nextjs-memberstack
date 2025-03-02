import { cookies } from 'next/headers';

const memberAuthTokenName = '_ms-mid';

export const getCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(memberAuthTokenName)?.value;
};

export const setCookie = async ({
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

export const removeCookie = async () => {
    const cookieStore = await cookies();

    cookieStore.delete(memberAuthTokenName);
};

export function getSessionDurationDays(unixTimestampMillis: number) {
  const now = Date.now();
  const differenceMillis = unixTimestampMillis - now;
  return Math.ceil(differenceMillis / (24 * 60 * 60 * 1000));
}
