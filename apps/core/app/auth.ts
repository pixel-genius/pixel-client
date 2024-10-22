import NextAuth, { NextAuthResult } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const nextAuth = NextAuth({
  debug: true,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        otp: { label: "OTP", type: "text", required: false },
      },
      // async authorize(credentials, request): Promise<any> {
      //   console.log("-----", credentials);
      //   console.log("++++++++++", request);
      // },
    }),
  ],
  callbacks: {},
  logger: {
    error(code) {
      console.error(code.name, code.cause, code.message);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: "123",
});

export const auth: NextAuthResult["auth"] = nextAuth.auth;
export const { signIn, signOut, handlers } = nextAuth;
