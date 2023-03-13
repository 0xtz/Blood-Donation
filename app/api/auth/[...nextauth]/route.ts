import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    CredentialsProvider({
      name: "signIn",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      }, // we using custom credentials
      authorize: async (credentials) => {
        const { email, password } = credentials as Credentials;
        //
        const user = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });
        console.table(user);
        // check if user exists and password is correct
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error(`Invalid email or password`);
        }
        return {
          id: user.id,
          cin: user.cin,
          email: user.email,
          name: `${user.first_name} ${user.last_name}`,
          pfp: user.pfp,
          // role: user?.role === "admin" ? "admin" : "user",
        };
      },
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },

  //   custom pages
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  // },

  callbacks: {
    // async redirect
    async redirect({ url, baseUrl }) {
      // don't redirect to sign in page
      if (url === "/auth/signin") {
        return baseUrl;
      }
      return url;
    },
    //
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          // randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          // randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
