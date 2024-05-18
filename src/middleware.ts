import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

//Public pages for user
export default authMiddleware({
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