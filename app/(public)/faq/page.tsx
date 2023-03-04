import { use } from "react";
import prisma from "@/lib/prismadb";
import UserForm from "./UserForm";

function page() {
  return (
    <main>
      <UserForm />
    </main>
  );
}

export default page;
