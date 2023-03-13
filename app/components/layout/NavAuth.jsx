"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";

// react-identicons
import Identicon from "react-identicons";
import { Dna } from "react-loader-spinner";

export default function NavAuth() {
  const session = useSession();

  //
  const signoutHandler = () => {
    console.log("signing out");
    signOut();
  };

  const loggedIn = (
    <>
      {session?.user?.image ? (
        <Image
          src={session?.user?.image}
          alt="user avatar"
          width="41"
          height="41"
          className="nav__pfp"
        />
      ) : (
        <div className="nav__pfp">
          <Identicon string={session?.user?.email} size="40" />
        </div>
      )}
      <button className="button__secondary" onClick={signoutHandler}>
        Sign out
      </button>
    </>
  );
  const loggedOut = (
    <>
      <button className="button__secondary" onClick={() => signIn()}>
        Sign in
      </button>
      <Link href="/auth/signup" className="button__primary">
        Sign up
      </Link>
    </>
  );
  const loading = (
    <>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </>
  );

  return (
    <div className="nav__auth">
      {session.status === "loading"
        ? loading
        : session.status === "authenticated"
        ? loggedIn
        : loggedOut}
    </div>
  );
}
