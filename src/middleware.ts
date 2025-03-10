import { NextRequest, NextResponse } from 'next/server';
import {DEFAULT_LOGIN_URL, NON_AUTH_FALLBACK_SLUG} from '@/app/auth/utils/enums';

// 1. Specify protected and public routes
const protectedRoutes = ['/admin'];
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((pattern) =>
      path.startsWith(pattern)
  );
  const isPublicRoute = publicRoutes.includes(path);

  // // 3. Decrypt the session from the cookie
  const sessionCookie = req.cookies.get("_ms-mid");

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL(NON_AUTH_FALLBACK_SLUG, req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    sessionCookie &&
    !req.nextUrl.pathname.startsWith(DEFAULT_LOGIN_URL)
  ) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_URL, req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|favicon\\.ico$).*)'],
};
