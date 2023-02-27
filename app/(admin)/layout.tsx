// import { Provider } from "react-redux";
// import { store } from "@/store/store";

export const metadata = {
  title: "BD | Admin",
  //   admin pages
  description: `Admin pages for Blood Donation Application`,
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
