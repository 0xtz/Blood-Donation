"use client";

import SignInForm from "@/app/components/pages/auth/SignInForm";

function page() {
  return (
    <main className="main__form flex_column">
<<<<<<< HEAD
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
=======
      <SignInForm />
>>>>>>> 452b401275958b7f97ec2610c8509f1f67954898
    </main>
  );
}

export default page;
