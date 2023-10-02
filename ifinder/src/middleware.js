import { NextResponse } from 'next/server'
import { APP_ROUTER } from './constants/appRouter'

export function middleware(request) {
    const isLogged = request.cookies.get()

    if (request.nextUrl.pathname.includes(APP_ROUTER.HOME) && isLogged) {
        return NextResponse.rewrite(new URL(APP_ROUTER.PRIVATE, request.url))
    }

    if (request.nextUrl.pathname.includes(APP_ROUTER.PRIVATE) && !isLogged) {
    return NextResponse.rewrite(new URL(APP_ROUTER.HOME, request.url))
    }
}
 
export const config = {
  matcher: ['/', '/private']
}