"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Dna } from "react-loader-spinner";
import Image from "next/image";
// @ts-ignore
import Identicon from "react-identicons";

export default function NavAuth() {
  const { data: session, status: loading } = useSession();

  useEffect(() => {
    console.log("loading", loading);
    console.log("session", session?.user);
  }, [loading, session]);

  const authUserNav = (
    <>
      <Link
        // @ts-ignore
        href="#"
        className="">
        Profile
      </Link>
      <Link
        // @ts-ignore
        href="#"
        className="nav__pfp">
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt="user profile picture"
            width={40}
            height={40}
            className="nav__pfp"
          />
        ) : (
          <Identicon string={session?.user?.name} size={30} />
        )}
      </Link>
      <button
        className="button__secondary"
        onClick={() => {
          signOut({
            callbackUrl: "http://localhost:3984/auth/signin",
          });
        }}>
        Sign out
      </button>
    </>
  );
  const unAuthUserNav = (
    <>
      {/* added it here just to test */}
      {/* <Link href="/" className="">
        <Image src={profile} alt="profile" />
      </Link> */}
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
