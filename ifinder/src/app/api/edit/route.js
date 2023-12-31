import { LOCAL_KEYS } from "@/constants";
import { getDateExpiration } from "@/utils";
import { cookies } from "next/headers";
import { userService } from "@/services";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const dataRequest = await request.json();
  try {
    const editData = await userService.edit(
      dataRequest.email,
      dataRequest.description,
      dataRequest.age,
      dataRequest.sex,
      dataRequest.hobbies,
    );
    console.log(editData)

    // const user = { id: editData.id, name: editData.name };
    // const JwtToken = cookies().get(LOCAL_KEYS.TOKEN);
    // const JwtExpires = getDateExpiration(JwtToken);

    // cookies().set({
    //   name: LOCAL_KEYS.USER,
    //   value: JSON.stringify(user),
    //   expires: JwtExpires,
    //   httpOnly: true,
    // });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error))
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
  }
}
