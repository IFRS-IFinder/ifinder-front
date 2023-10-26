import {  cardService } from "@/services";
import axios from "axios";
import { NextResponse } from "next/server";


export async function POST(request) {
  const dataRequest = await request.json();

  try {
    await cardService.add(dataRequest.content);
    return NextResponse.json({ status: 200 });

  } catch (error) {

    if (axios.isAxiosError(error))
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
    });

  }
}
