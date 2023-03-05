import SignUpForm from "@/app/components/pages/auth/SignUpForm";
import Link from "next/link";

function page() {
  return (
    <main className="main__form flex_column">
      <SignUpForm />
    </main>
  );
}

export default page;
