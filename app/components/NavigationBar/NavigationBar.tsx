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
        {/* we wont use this i think */}
        {/* <ul className="nav__list">
          <li className="nav__item">
            <span id="red"># </span>
            <Link href="/">Home</Link>
          </li>
          <li className="nav__item">
            <span id="red"># </span>
            <Link href="/about">About Us</Link>
          </li>
          <li className="nav__item">
            <span id="red"># </span>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul> */}
        <NavAuth />
      </div>
    </nav>
  );
}
