import { NextRequest, NextResponse } from "next/server";
import { COOKIES } from "@repo/ui/constant/cookie";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to routes under /auth/*
  if (pathname.startsWith("/auth/")) {
    return NextResponse.next();
  }

  // Check for authentication cookies
  const accessToken = request.cookies.get(COOKIES.ACCESS_TOKEN); 
  const refreshToken = request.cookies.get(COOKIES.REFRESH_TOKEN);

  // Redirect to login if unauthenticated
  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Allow access to protected routes if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*).*)"], // Exclude static files (e.g., .js, .css, etc.)
};
