"use client";

import React, { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      callbackUrl: "http://localhost:3000/",
      email: user.email,
      // password: user.password,
    });
    console.log(result);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="button__primary" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default page;
