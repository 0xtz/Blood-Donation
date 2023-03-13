"use client";

import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function NavAuth() {
  return (
    <div className="nav__auth">
      {/* <Link href="/auth/signin" className="button__secondary">
        Sign in
      </Link> */}
      <button className="button__secondary" onClick={() => signIn()}>
        Sign in
      </button>
      <Link href="/auth/signup" className="button__primary">
        Sign up
      </Link>
    </div>
  );
}
