import { AuthContext } from "@/app/AuthContext";

//
import Navigation from "@/app/components/layout/Navigation";

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
      <body>
        <AuthContext>
          <Navigation />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
