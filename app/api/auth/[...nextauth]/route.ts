import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prismadb";

export const authOptions: NextAuthOptions = {
  providers: [
    // email / password providers...
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await prisma.users.findUnique({
          where: {
            email: email, // the email || cin to add
          },
        });
        if (!user || !(await bcrypt.compare(password, user.password!))) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          cin: user.cin,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          dob: user.dob,
          // role: user?.role === "admin" ? "admin" : "user",
        };
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
  },

  events: {
    async signIn(message) {
      console.log("signIn", message);
    },
    async signOut(message) {
      console.log("signOut", message);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
