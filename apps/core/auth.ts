import NextAuth, { type NextAuthResult } from "next-auth";
import { authConfig } from "./lib/auth-config";

const result = NextAuth(authConfig);

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;
export const GET = handlers.GET;
export const POST = handlers.POST;
