import React from "react";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const newUser = {
  cin: "AJ1570",
  last_name: "Ziani",
  first_name: "Taha",
  email: `0xtz@gmail.com`,
  dob: new Date(2003, 1, 1),
  address: `Random Address`,
  city: `Rabat`,
  phone_number: `+212 6 00 00 00 00`,
  blood_type: `A+`,
  password: `admin`,
};

export default async function Page() {
  // get the session
  const session = await getServerSession(authOptions);

  const totalUsers = await prisma.users.count();
  //   create a user if it doesn't exist
  const user = await prisma.users.findUnique({
    where: {
      email: newUser.email,
    },
  });
  if (!user) {
    await prisma.users.create({
      data: newUser,
    });
  }

  return (
    <div>
      <h1>Page</h1>
      <p>
        {totalUsers} {totalUsers === 1 ? "user" : "users"}
        {user
          ? `User ${user.first_name} ${user.last_name} exists`
          : `User ${newUser.first_name} ${newUser.last_name} doesn't exist`}
      </p>
    </div>
  );
}
