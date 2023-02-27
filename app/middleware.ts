//
// app middleware
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export default function middleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) {
  // do something
  // if the route is /admin then redirect to /login
  if (req.url === "/admin") {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  }
  next(req, res);
}

// aply middleware to this route only (pages/api/version.ts) and (/admin)
export const config = {
  matcher: ["/about/:path*", "/admin"],
};
