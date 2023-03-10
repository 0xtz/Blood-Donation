"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { ToastContainer } from "react-toastify";

export interface AuthContextProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function AuthContext({ children }: AuthContextProps) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
