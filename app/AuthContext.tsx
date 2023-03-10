"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

export interface AuthContextProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
