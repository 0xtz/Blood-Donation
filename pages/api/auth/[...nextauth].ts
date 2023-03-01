import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import prisma from "../../../lib/prismadb";

// types
import { User } from "@prisma/client";

export default NextAuth({
  providers: [
    // TODO : ADD EMAIL PROVIDER LATER
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
    // Sign in with credentials
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "CIN", type: "text", placeholder: "CIN" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   // async authorize(credentials) {
    //   // TODO : ADD AUTHENTICATION LOGIC HERE
    //   // },
    // }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: parseInt(process.env.JWT_EXPIRES_IN!),
    //
  },
  pages: {
    signIn: "/auth/signin",
  },
  // Auth options
});
