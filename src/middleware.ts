import { NextRequest, NextResponse } from "next/server";

// Auto-initialize database on first API request
let dbInitialized = false;

export async function middleware(request: NextRequest) {
  // Only run for API routes
  if (request.nextUrl.pathname.startsWith("/api") && !dbInitialized) {
    try {
      const baseUrl = request.nextUrl.origin;
      const setupUrl = new URL("/api/db/setup", baseUrl);
      const response = await fetch(setupUrl, { method: "POST" });
      if (response.ok) {
        dbInitialized = true;
        console.log("Database auto-initialized via middleware");
      }
    } catch (error) {
      console.error("Auto DB init failed:", error);
      // Don't block the request, just log the error
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
