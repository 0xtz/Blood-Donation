import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}

// visit http://localhost:3000/admin/dashboard
