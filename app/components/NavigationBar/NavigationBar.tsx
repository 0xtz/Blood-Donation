import Link from "next/link";
import NavAuth from "./NavAuth";

export function NavigationBar() {
  return (
    <nav>
      {/* <img src="" alt="logo" /> */}
      <div className="nav__wrapper">
        <Link href="/">
          <Image className="nav__logo" high={60} width={60} src="/logo.svg" alt="logo" />
        </Link>
        <NavAuth />
      </div>
    </nav>
  );
}
