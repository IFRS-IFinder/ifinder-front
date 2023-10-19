"use server";

import { LOCAL_KEYS, APP_ROUTES } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logout() {
  cookies().delete(LOCAL_KEYS);
  cookies().delete(LOCAL_KEYS.USER);
  redirect(APP_ROUTES.HOME);
}
