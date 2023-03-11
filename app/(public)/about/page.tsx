import { User } from "@/types";
import React from "react";
import crypto from "crypto";
import prisma from "@/lib/prismadb";

// create a user with a random
// name and a random age

export default async function page() {
  return (
    <>
      <main>
        <h1>About Page : </h1>
      </main>
    </>
  );
}
