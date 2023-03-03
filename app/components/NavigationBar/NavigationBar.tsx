"use client";

import Link from "next/link";
import { useState } from "react";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      {/* <img src="" alt="logo" /> */}
      <div className="nav__wrapper">
        <img className="nav__logo" src="/logo.svg" alt="logo" />
        <ul className="nav__list">
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
        </ul>

        <div className="nav__auth">
          <Link href="/signIn" className="button__secondary">
            Sign in
          </Link>
          <Link href="/signUp" className="button__primary">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
