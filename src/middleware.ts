import { clerkClient,clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isAuthRoute = createRouteMatcher (["/stores(.*)"])
const isAdminRoute = createRouteMatcher (["/admin(.*)"])
export default clerkMiddleware(async (auth,req) => {
    const client = await clerkClient();
    const {isSignedIn } = await client.authenticateRequest(req);
    if (isAuthRoute(req) && !isSignedIn) {
        await auth.protect ({
            unauthenticatedUrl: process.env.NEXT_PUBLIC_SERVER_URL + "/sign-in",
        })
    } // Nguoi ban và người dùng chưa được đăng nhập sẽ chuyển đến trang đăng nhập 
    // Yeu cau la quan tri va khong có role người dùng sẽ bị chuyển hướng đến trang forbidden
    if (
        isAdminRoute(req) && 
        (await auth()).sessionClaims?.metadata.role === undefined
      ) {
        return NextResponse.redirect(new URL("/forbidden", req.url));
      }
    //else
    return NextResponse.next();

}) ;
export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
      // Always run for API routes
      "/(api|trpc)(.*)",
    ],
  };