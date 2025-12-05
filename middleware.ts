import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const publicRoutes = ["/login", "register", "/"];

export async function proxy(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
    const isPrivateRoute = !publicRoutes.includes(request.nextUrl.pathname);

    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
	if (!sessionCookie && !isPrivateRoute) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		  すべてのページにマッチさせつつ、apiルート・_next以下・画像ファイルは除外する
		  参考: 
		  - https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
		  - https://github.com/vercel/next.js/discussions/42424#discussioncomment-4055320
		*/
		"/((?!api|_next/static|_next/image|favicon.ico|llms.txt|.*\\.(png|jpg|jpeg|gif|svg|webp|ico)$).*)",
	],
};