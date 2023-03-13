import { useSession } from "next-auth/react";

export default function page() {
  // get the user from the session
  // const user = useSession();
  // console.log(user);
  return (
    <div>
      <h1>My account</h1>
      <pre></pre>
    </div>
  );
}
