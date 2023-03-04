import React from "react";
import {
  signIn,
  useSession,
  signOut,
  getSession,
  providers,
  // @ts-ignore
} from "next-auth/client";
import Link from "next/link";

function NavAuth() {
  return (
    <div className="nav__auth">
      <Link href="/auth/signin" className="button__secondary">
        Sign in
      </Link>
      <Link href="/auth/signup" className="button__primary">
        Sign up
      </Link>
    </div>
  );
}

export default NavAuth;
