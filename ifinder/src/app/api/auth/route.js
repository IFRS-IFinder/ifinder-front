import { LOCAL_KEYS } from "@/constants";
import { authService } from "@/services/authService";
import { getDateExpiration } from "@/utils";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request) {
  const dataRequest = await request.json();

  try {
    const loginData = await authService.auth(
      dataRequest.email,
      dataRequest.password
    );

    const user = { id: loginData.id, name: loginData.name };
    const JwtToken = loginData.token;
    const JwtExpires = getDateExpiration(JwtToken);

    cookies().set({
      name: LOCAL_KEYS.USER,
      value: JSON.stringify(user),
      expires: JwtExpires,
      httpOnly: true,
    });
    cookies().set({
      name: LOCAL_KEYS.TOKEN,
      value: JwtToken,
      expires: JwtExpires,
      httpOnly: true,
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error))
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
  }
}
