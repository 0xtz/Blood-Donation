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
    console.log(data);
    return data;
  });
  const user = await prisma.users
    .create({
      // id	cin	email	password	dob	last_name	first_name	city	last_donation	created_at	updated_at	bloodType	phoneNumber	address
      data: {
        cin: cin,
        email: email,
        last_name: last_name,
        first_name: first_name,
        dob: dob,
        address: address,
        city: city,
        phoneNumber: phone_number,
        bloodType: blood_type,
        password: await bcrypt.hash(password, 10),
      },
    })
    .catch((err: any) => {
      console.log(err);
      return null;
    });

  if (!user) {
    return new Response("error", {
      status: 500,
    });
  }

  return new NextResponse(
    "created", {
      status : 200
    }
  );
}
