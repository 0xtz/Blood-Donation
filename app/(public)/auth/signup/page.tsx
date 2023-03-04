"use client";

import Link from "next/link";
import { useState } from "react";

function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
        <h1 className="form__title underline">Sign Up</h1>
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
        {/* you dont have an account ? sign up */}
        <span className="color-stroke">You already have an account ?</span>
        <Link href="/auth/signup" className="button__secondary form__button">
          Sign Up
        </Link>
      </form>
    </main>
  );
}

export default page;
