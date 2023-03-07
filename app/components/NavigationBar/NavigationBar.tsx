import Link from "next/link";
import NavAuth from "./NavAuth";

export function NavigationBar() {
  return (
    <nav>
      {/* <img src="" alt="logo" /> */}
      <div className="nav__wrapper">
        <Link href="/">
          <img className="nav__logo" src="/logo.svg" alt="logo" />
        </Link>
        <NavAuth />
      </div>
    </nav>
  );
}
