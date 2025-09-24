import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { TOKEN_COOKIE } from "./constants";

const AuthRoutes = ["/auth/login", "/auth/register"];

const ProtectedRoutes = ["/dashboard", "/auth/verify-email"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_COOKIE)?.value;
  const { pathname } = request.nextUrl;
  //  If user has token and tries to access any route from AuthRoutes → redirect to home
  if (token && AuthRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //  If user doesn't has token and tries to access /any route except /login → redirect to /login
  if (!token && ProtectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for:
  // - /api, /trpc, /_next, /_vercel
  // - files (e.g. .ico, .png)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
