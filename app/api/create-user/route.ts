import prisma from "@/lib/prismadb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// create a new user and return the user object
export async function POST(request: Request) {
  const {
    cin,
    last_name,
    first_name,
    email,
    dob,
    address,
    city,
    phone_number,
    blood_type,
    password,
  } = await request.json().then((data) => {
    return data;
  });

  // check if the user already exists in the database by email or cin or phone number
  const user = await prisma.users.findFirst({
    where: {
      OR: [
        {
          email: email,
        },
        {
          cin: cin,
        },
      ],
    },
  });

  // if the user already exists, return an error
  if (user) {
    return new NextResponse("user already exists", {
      status: 400,
    });
  }

  // CREATE THE USER
  await prisma.users.create({
    // id	cin	email	password	dob	last_name	first_name	city	last_donation	created_at	updated_at	bloodType	phoneNumber	address
    data: {
      cin: cin,
      email: email,
      last_name: last_name,
      first_name: first_name,
      dob: dob,
      address: address,
      city: city,
      phone_number: phone_number,
      blood_type: blood_type,
      password: await bcrypt.hash(password, 10),
    },
  });

  return new NextResponse("created", {
    status: 200,
  });
}
