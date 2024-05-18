import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// export default authMiddleware({
//   // publicRoutes: ["((?!^/admn).*)"],
//   publicRoutes: ["/", "/chat", "/chat/*", "/prompt", "/prompt/*"],
// });

export default authMiddleware({
  // publicRoutes: ["((?!^/admn).*)"],
  publicRoutes: [
    "/",
    "/chat(/.*)?",
    "/prompt(/.*)?",
    "/api/chat",
    "/api/training",
  ],
});


export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)"
    ]
};