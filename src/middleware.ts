import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Middleware now only handles routing/auth concerns
  // Database initialization is handled separately
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
