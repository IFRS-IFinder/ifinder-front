import { NextResponse } from "next/server";
import { APP_ROUTES } from "./constants/appRoutes";
import { LOCAL_KEYS } from "./constants";

export function middleware(request) {
  const token = request.cookies.has(LOCAL_KEYS.TOKEN);
  const actualUrl = request.nextUrl.pathname;

  if (actualUrl.includes(APP_ROUTES.PRIVATE) && !token) {
    return NextResponse.redirect(new URL(APP_ROUTES.AUTH, request.url));
  }

  if (actualUrl.includes(APP_ROUTES.HOME) && token) {
    return NextResponse.redirect(new URL(APP_ROUTES.PRIVATE, request.url));
  }
}

export const config = {
  matcher: ["/", "/private"],
};
