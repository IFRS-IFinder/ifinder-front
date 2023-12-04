import { cookies } from "next/headers";
import { FormEditUser } from "./sections";
import { userService } from "@/services";
import { LOCAL_KEYS } from "@/constants";

export default async function Edit() {
  const idUser = JSON.parse(cookies().get(LOCAL_KEYS.USER).value).id
  const userData = await userService.getCompleteById(idUser);
  
  return (
    <div>
      <h1>Edite sua conta</h1>
      <FormEditUser user={userData} />
    </div>
  );
}
