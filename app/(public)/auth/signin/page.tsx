"use client";

import React, { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    // const result = await signIn("credentials", {
    //   callbackUrl: "http://localhost:3000/",
    //   email: user.email,
    //   // password: user.password,
    // });
    // console.log(result);
  };

  return (
    <main className="main__form flex_column">
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
        <span className="color-stroke">You don't have an account ?</span>
        {/* @ts-ignore */}
        <Link href="/auth/signup" className="button__secondary form__button">
          Sign Up
        </Link>
      </form>
    </main>
  );
}

export default page;
