"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

type Props = {
  children?: React.ReactNode;
};

export const AuthContext = ({ children }: Props) => {
  return (
    <SessionProvider>
      {children}
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
    </SessionProvider>
  );
};
