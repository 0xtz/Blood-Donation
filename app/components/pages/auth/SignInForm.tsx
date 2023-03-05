"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function SignInForm() {
  const [error, setError] = useState<null | {
    message: string;
    status: number;
  }>({
    message: "",
    status: 0,
  });

  // const notify = () => toast("Wow so easy !"); // wait for to SignIn promise to resolve
  const notify = (message: string) => toast(message);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler = async (e) => {
    notify("Wow so easy !");
    e.preventDefault();

    await signIn("credentials", {
      callbackUrl: "http://localhost:3984/", // callbackUrl is for redirection after login
      // redirect: false,
      email: user.email,
      password: user.password,
    })
      .then((res) =>
        setError({
          ...error!,
          message: "Success",
        })
      )
      .catch((err) => {
        setError({
          message: err.message,
          status: err.status,
        });
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
        <span className="color-stroke">You don't have an account ?</span>
        <Link href="/auth/signup" className="button__secondary form__button">
          Sign Up
        </Link>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}