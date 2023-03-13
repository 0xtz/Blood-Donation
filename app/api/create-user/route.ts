import prisma from "@/lib/prisma";
// @ts-ignore
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
  } = await request.json();
  try {
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
    if (user) {
      return new NextResponse("User already exists", { status: 400 });
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // insert the user into the database
    await prisma.users.create({
      data: {
        cin,
        last_name,
        first_name,

        email,
        dob,
        address,
        city,
        phone_number,
        blood_type,
        password: hashedPassword,
      },
    });
    // ok everything went well
    return new NextResponse("User created successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error creating user", { status: 500 });
    // return NextResponse.json({ error: error }, { status: 400 });
  }
}
