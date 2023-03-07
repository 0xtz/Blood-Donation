import Link from "next/link";
import NavAuth from "./NavAuth";
import Image from 'next/image'

export function NavigationBar() {
  return (
    <nav>
      {/* <img src="" alt="logo" /> */}
      <div className="nav__wrapper">
        <Link href="/">
          <Image className="nav__logo" height={60} width={60} src="/logo.svg" alt="logo" />
          
        </Link>
        <NavAuth />
      </div>
    </nav>
  );
}
