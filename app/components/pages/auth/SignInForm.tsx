"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

export function SignInForm() {
  const { data: session } = useSession();

  console.log(`🚀 ~ file: SignInForm ~ session:`, session);

  const [error, setError] = useState<null | {
    message: string;
    status: number;
  }>({
    message: "",
    status: 0,
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    await signIn("signIn", {
      email: user.email,
      password: user.password,
    });
  };
  return (
    <>
      <form className="form__signin">
        <h1 className="form__title underline">Sign In</h1>
        <input
          className="form__input"
          type="text"
          value={user.email}
          placeholder="Email or CIN"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="form__input"
          type="password"
          value={user.password}
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="button__primary form__button" onClick={handleSubmit}>
          Sign In
        </button>
        <span className="color-stroke">You do not have an account ?</span>
        <Link href="/auth/signup" className="button__secondary form__button">
          Sign Up
        </Link>
      </form>
    </>
  );
}
