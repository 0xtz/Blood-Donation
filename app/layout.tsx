import AuthContext from "@/app/AuthContext";
import { Session } from "next-auth";
import { headers } from "next/headers";

import "@/app/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

export const metadata = {
  title: "Blood Donation",
  description: "Blood Donation Application",
};

// SESSION
async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthContext session={session}>
          <NavigationBar />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
