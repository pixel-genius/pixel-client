// lib/auth-config.ts
import type { PostLoginResponse } from "@repo/apis/core/accounts/users/login/post/post-login.types";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "CustomLogin",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        const res = await fetch(
          `https://api.pixelgenius.ir/accounts/users/login/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials?.email,
              password: credentials.password,
            }),
          },
        );

        const data: PostLoginResponse = await res.json();

        console.log("data", data, data?.data?.email);
        if (!res.ok) throw new Error(data?.message || "Login failed");

        return {
          id: data.data.id,
          name: data.data.username,
          email: data.data.email,
          accessToken: data.data.token?.access ?? "", // Your JWT
          refreshToken: data.data.token?.refresh ?? "", // Your JWT
          is_email_verified: data.data.is_email_verified,
          is_active: data.data.is_active,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && "accessToken" in user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken && "accessToken" in session)
        session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // custom login page
  },
  secret: process.env.AUTH_SECRET,
};
