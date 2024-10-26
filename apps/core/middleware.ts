import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // console.log('-------------------',request);
  // const access = request.cookies.get("accessToken");
  // const refresh = request.cookies.get("refreshToken");
  // const nextPath = request.nextUrl.pathname;
  // const loginPath = "/auth/login";
  // if ((!access || refresh) && nextPath !== loginPath)
  //   return NextResponse.redirect(new URL(loginPath, request.url));
  // if (access && nextPath === loginPath)
  //   return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!.*\\..*).*)"], //Exclude all files with extensions (e.g., .js, .css)
};
