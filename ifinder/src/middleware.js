import { NextResponse } from 'next/server'
import { APP_ROUTER } from './constants/appRouter'
import { LOCAL_KEYS } from './constants'

export function middleware(request) {
  const token = request.cookies.has(LOCAL_KEYS.TOKEN);
  const actualUrl = request.nextUrl.pathname;

  if (actualUrl.includes(APP_ROUTER.PRIVATE) && !token) {
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  if (actualUrl.includes(APP_ROUTER.HOME) && token) {
    return NextResponse.redirect(new URL(APP_ROUTER.PRIVATE, request.url));
  }
}
 
export const config = {
  matcher: ['/', '/private']
}