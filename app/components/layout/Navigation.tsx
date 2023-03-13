import Link from "next/link";
import NavAuth from "./NavAuth.jsx";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Navigation() {
  const session = await getServerSession(authOptions);

  return (
    <nav>
      {/* <img src="" alt="logo" /> */}
      <div className="nav__wrapper">
        <Link href="/">
          <Image
            className="nav__logo"
            height={60}
            width={60}
            src="/logo.svg"
            alt="logo"
          />
        </Link>
        {/* if the user is logged in */}
        {session?.user ? (
          <ul className="nav__links">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        ) : (
          <NavAuth />
        )}
      </div>
    </nav>
  );
}
