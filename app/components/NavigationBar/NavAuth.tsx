"use client";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Dna } from "react-loader-spinner";

export default function NavAuth() {
  const { data: session, status: loading } = useSession();

  useEffect(() => {
    if (loading === "unauthenticated") {
      console.log("unauthenticated");
    } else if (loading === "authenticated") {
      console.log("authenticated", session);
    }
  }, [loading, session]);

  const authUserNav = (
    <>
      <Link href="/" className="">
        Profile
      </Link>
      <Link href="/" className="">
        {session?.user?.name}
      </Link>
      <button
        className="button__secondary"
        onClick={() => {
          signOut();
        }}>
        Sign out
      </button>
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
  const loadingNav = (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
  return (
    <div className="nav__auth">
      {/* {loading === "authenticated" ? authUserNav : unAuthUserNav} */}
      {loading === "loading"
        ? loadingNav
        : loading === "authenticated"
        ? authUserNav
        : unAuthUserNav}
    </div>
  );
}
