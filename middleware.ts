import { NextRequest, NextResponse } from "next/server";
import path from "path";

const publicRoutes = [
    "/account/user/login",
    "/account/mentor/login",
    "/account/user/signup",
    "/account/mentor/signup"
]


const containsPublicRoute = (pathname : string) => {
    return publicRoutes.some(route => pathname.startsWith(route))
}

export function middleware(req : NextRequest) {
    const cookie = req.cookies.has("session")
    const {pathname} = req.nextUrl
    
    if(!cookie) {
        if(containsPublicRoute(pathname)) {
            return NextResponse.next()
        } else {
            console.log("I am hitting up",pathname)
            return NextResponse.redirect(new URL("/account/user/login",req.url))
        }
    }

    return NextResponse.next()
}


export const config = {
    matcher : ['/home','/account/:path*','/']
}