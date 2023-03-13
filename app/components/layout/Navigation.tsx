//
import React from "react";
import Link from "next/link";
import NavAuth from "./NavAuth.jsx";

import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

// import Identicon from "react-identicons";

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
        <NavAuth />
      </div>
    </nav>
  );
}

// {/* if the user is logged in */}
// {session?.user ? (
//   <ul className="nav__auth">
//     <li>
//       <Link href="/dashboard">Dashboard</Link>
//     </li>
//     <li>
//       {/* pfp */}
//       {session?.user?.pfp ? (
//         <Image
//           className="nav__pfp"
//           height={40}
//           width={40}
//           src={session?.user?.pfp}
//           alt="pfp"
//         />
//       ) : (
//         // use user ID bc its unique
//         // use Email for now :
//         <Identicon string={session?.user?.email} />
//         // <p>{session?.user?.email}</p>
//       )}
//     </li>
//     <li>
//       <button className="button__secondary">Sign out</button>
//     </li>
//   </ul>
