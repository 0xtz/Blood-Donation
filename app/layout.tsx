import { AuthContext } from "@/app/AuthContext";

//
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

//
import "@/app/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Blood Donation",
  description: "Blood Donation Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthContext>
          <NavigationBar />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
