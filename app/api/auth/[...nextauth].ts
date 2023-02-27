//
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // OAuth authentication providers...
    // email / password providers...
  ],
  // A database is optional, but required to persist accounts in a database
});
