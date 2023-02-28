// import { Provider } from "react-redux";
// import { store } from "@/store/store";
import { Session } from "next-auth";
import { headers } from "next/headers";
// import the context

export const metadata = {
  title: "BD | User",
  description: "Blood Donation Application",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get the session from the local storage
  const session = JSON.parse(
    // @ts-ignore
    headers["next-auth.session-token"]
  ) as Session;
  return (
    // <Provider store={store}>
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
    // </Provider>
  );
}
