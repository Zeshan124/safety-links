import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next/static/") || pathname.startsWith("/fonts/") || pathname.startsWith("/images/")) {
    // Immutable static assets — cache for 1 year
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.startsWith("/_next/image")) {
    // Next.js image optimizer output — long cache, allow revalidation
    response.headers.set("Cache-Control", "public, max-age=31536000, stale-while-revalidate=86400");
  } else {
    // HTML pages — serve instantly from cache, revalidate in background every hour
    response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
