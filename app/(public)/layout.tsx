import "@/app/styles/globals.scss";

import { NavigationBar } from "@/app/components/NavigationBar/NavigationBar";

// ! to change
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
