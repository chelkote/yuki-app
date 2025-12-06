import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const publicRoutes = ["/login", "/register", "/"];

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const isPrivateRoute = !publicRoutes.includes(request.nextUrl.pathname);

  if (!sessionCookie && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
	matcher: [
	  "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.webp).*)",
	],
  };
  
