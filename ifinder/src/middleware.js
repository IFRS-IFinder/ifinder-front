import { NextResponse } from "next/server";
import { APP_ROUTES } from "./constants/appRoutes";
import { LOCAL_KEYS } from "./constants";

const privateRoutes = [APP_ROUTES.CARDS, APP_ROUTES.PROFILE, APP_ROUTES.CHAT];
const publicRoutes = [APP_ROUTES.HOME, APP_ROUTES.REGISTER];

export function middleware(request) {
  const token = request.cookies.has(LOCAL_KEYS.TOKEN);
  const actualUrl = request.nextUrl.pathname;

  if (actualUrl.includes(privateRoutes) && !token) {
    return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));
  }

  if (actualUrl.includes(publicRoutes) && token) {
    return NextResponse.redirect(new URL(APP_ROUTES.PRIVATE, request.url));
  }
}

export const config = {
  matcher: ["/", "/cards", "/profile", "/chat"],
};
