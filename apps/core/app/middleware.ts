import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (
    (!request.cookies.get("access") || !request.cookies.get("refresh")) &&
    request.nextUrl.pathname !== "/auth/login"
  )
    return NextResponse.redirect(new URL("/auth/login", request.url));
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!.*\\..*).*)"], //Exclude all files with extensions (e.g., .js, .css)
};
