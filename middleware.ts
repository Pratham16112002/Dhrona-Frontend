import { NextRequest, NextResponse } from "next/server";
import axiosClient from "./axios/axiosClient";

const publicRoutes = [
    "/account/user/login",
    "/account/mentor/login",
    "/account/user/signup",
    "/account/mentor/signup"
];

const isPublic = (pathname: string) =>
    publicRoutes.some(route => pathname.startsWith(route));

export async function middleware(req: NextRequest) {
    const sessionCookie = req.cookies.get("session");
    const { pathname } = req.nextUrl;

    // Allow public routes
    if (!sessionCookie) {
        if (isPublic(pathname)) return NextResponse.next();
        return NextResponse.redirect(new URL("/account/user/login", req.url));
    }

    // If session cookie exists → allow through
    // Auth check will happen in server components, not here
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/home/:path*",   
        "/account/:path*",
        "/"
    ]
};