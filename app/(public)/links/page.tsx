import Link from "next/link";

// get all project routes :
const getRoutes = async () => {
  const routes = await fetch("/api/routes");
  return routes.json();
};

export default function Links() {
  //   const routes = getRoutes();
  return (
    <main>
      <h1>Links</h1>
      <ul>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/"></Link>
        </li>
      </ul>
    </main>
  );
}
