import React from "react";

import { useSession } from "next-auth/react";
import prisma from "@/lib/prismadb";

// create a user with a random
// name and a random age

export default async function page() {
  // total number of users from the database
  const totalUsers = await prisma.users.count();

  return (
    <>
      <main>
        <h1>About Page : </h1>
      </main>
    </>
  );
}
