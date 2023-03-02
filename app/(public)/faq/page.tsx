import { use } from "react";
// import { prisma } from "@/lib/prismadb";
import prisma from "@/lib/prismadb";
import UserForm from "./UserForm";

export async function listHospitals() {
  const hospitals = await prisma.hospital.findMany({
    select: {
      id: true,
      name: true,
      location: true,
    },
  });
  return hospitals;
}

function page() {
  const hospitals = use(listHospitals());

  return (
    <main>
      {hospitals?.map((hospital) => (
        <div key={hospital.id}>
          <h2>{hospital.name}</h2>
          <p>{hospital.location}</p>
        </div>
      ))}
      <UserForm />
    </main>
  );
}

export default page;
