"use client";

import { signOut } from "next-auth/react";

export default function page() {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <main>
      <h1>Sign Out :</h1>
      <p>
        you Sure you want to Sign Out ?
        <button className="button__primary" onClick={handleSignOut}>
          Sign Out
        </button>
      </p>
    </main>
  );
}
