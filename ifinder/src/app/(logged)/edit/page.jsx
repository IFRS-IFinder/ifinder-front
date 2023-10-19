import Link from "next/link";
import { APP_ROUTES } from "@/constants";
import { FormEditUser } from "./sections";

export default async function Edit() {
//  const userData = userService.getById();
const userData= {email: "asda", age: "1", hoobies: "asd", description: "asas", sex: "asd"}

  return (
    <div>
      <h1>Edite sua conta</h1>
      <FormEditUser user={userData} />
    </div>
  );
}
