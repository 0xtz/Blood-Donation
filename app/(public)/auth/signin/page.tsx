import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { SignInForm } from "@/app/components/pages/auth/SignInForm";

export default async function page() {
  const session = await getServerSession(authOptions);

  console.log(`🚀 ~ file: page.tsx:10 ~ page ~ session:`, session);

  return (
    <main className="main__form flex_column">
      {session?.user && (
        <h1>
          You are already logged in as {session.user.email} <br />
        </h1>
      )}
      <SignInForm />
    </main>
  );
}
