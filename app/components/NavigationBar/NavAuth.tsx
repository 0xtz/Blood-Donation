"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function NavAuth() {
  const { data: session, status: loading } = useSession();

  useEffect(() => {
    if (loading === "unauthenticated") {
      console.log("unauthenticated");
    } else if (loading === "authenticated") {
      console.log("authenticated", session);
    }
  }, [loading]);

  const authUserNav = (
    <>
      <Link href="/">Profile</Link>
      <Link href="/">Settings {session?.user?.name}</Link>
    </>
  );
  const unAuthUserNav = (
    <>
      <Link href="/auth/signin" className="button__secondary">
        Sign in
      </Link>
      <Link href="/auth/signup" className="button__primary">
        Sign up
      </Link>
    </>
  );
  return (
    <div className="nav__auth">
      {loading === "authenticated" ? authUserNav : unAuthUserNav}
    </div>
  );
}

export default NavAuth;
