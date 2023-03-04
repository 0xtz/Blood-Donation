import { NextRequest, NextResponse } from "next/server";
import NextAuth, { NextAuthOptions } from "next-auth";
// @ts-ignore
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prismadb";
// types

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    // email / password providers...
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
      },
      // @ts-ignore
      authorize: async (credentials) => {
        const { email } = credentials as {
          email: string;
        };
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "0xtz", email: "0xtz@gmail.com" };
        if (user.email === email) {
          // save the user token in the local storage
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
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

export default (req: NextRequest, res: NextResponse) =>
  NextAuth(req, res, authOptions);
