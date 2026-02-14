import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    const authCookie = request.cookies.get("admin_auth")

    // If accessing /admin/login, allow it
    if (pathname === "/admin/login") {
      return NextResponse.next()
    }

    // If accessing other /admin routes, check auth
    if (!authCookie || authCookie.value !== "true") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
