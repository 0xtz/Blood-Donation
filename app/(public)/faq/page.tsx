import { use } from "react";
// import { prisma } from "@/lib/prismadb";
import prisma from "@/lib/prismadb";

// select all user ids from the database
export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  return users;
}

function page() {
  const users = use(getUsers());
  return (
    <div>
      <h1>FAQ</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <a href={`/faq/${user.id}`}>{user.id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
