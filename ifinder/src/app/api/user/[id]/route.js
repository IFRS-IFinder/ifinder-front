import { LOCAL_KEYS } from "@/constants";
import { authService, userService } from "@/services";
import { getDateExpiration } from "@/utils";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request) {
  const dataRequest = await request.json();

  try {
    await userService.edit(
      dataRequest.id,
      dataRequest.email,
      dataRequest.description,
      dataRequest.hoobies,
      dataRequest.sex,
      dataRequest.age,
    );

    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error))
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
  }
}
