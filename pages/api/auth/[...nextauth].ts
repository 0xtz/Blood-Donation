import { NextRequest, NextResponse } from "next/server";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prismadb";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // email / password providers...
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // custom page we don't need this
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await prisma.users.findUnique({
          where: {
            // the email || cin
            email: email,
          },
        });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          cin: user.cin,
          email: user.email,
          fullName: user.first_name + " " + user.last_name,
          dob: user.dob,
        };
      },
    }),
    // ...add more providers here
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
