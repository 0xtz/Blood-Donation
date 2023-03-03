import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prismadb";
// types
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  providers: [
    // email / password providers...
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const { email } = credentials as {
          email: string;
        };
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: "0xtz.52@gmail.com" };
        if (user.email === email) {
          return user;
        }
        throw new Error("Invalid username or password");
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: parseInt(process.env.JWT_EXPIRES_IN!), // 90 days
  },
  session: {
    // @ts-ignore
    jwt: true,
    maxAge: parseInt(process.env.JWT_EXPIRES_IN!),
  },

  pages: {
    signIn: "/auth/signin",
  },

  // @ts-ignore
  events: {
    async signIn(message) {
      console.log("signIn", message);
    },
    async signOut(message) {
      console.log("signOut", message);
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, authOptions);
