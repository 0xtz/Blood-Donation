const { PrismaClient } = require("@prisma/client");
// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

const users = [
  {
    cin: "AA1343",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    password: "AA1343",
    dob: new Date(1995, 3, 1),
    city: "New York",
    phone_number: "+1 (555) 555-5555",
    blood_type: "O+",
  },
  {
    cin: "22222222",
    first_name: "Jane",
    last_name: "Doe",
    email: "jane.doe@example.com",
    password: "password123",
    dob: new Date(1995, 0, 1),
    city: "Los Angeles",
    phone_number: "+1 (555) 555-5555",
    blood_type: "A+",
  },
  {
    cin: "AJJ000",
    first_name: "Admin",
    last_name: "Admin",
    email: "admin@admin.com",
    password: "admin",
    dob: new Date(1999, 0, 1),
    city: "Rabat",
    phone_number: "+1 (555) 555-5555",
    blood_type: "A+",
  },
];

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const user of users) {
    const password = bcrypt.hashSync(user.password, 10);
    const newUser = await prisma.users.create({
      data: { ...user, password: password },
    });
    console.log(`Created user with id: ${newUser.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
