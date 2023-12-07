import { z } from "zod";

const regexEmail = new RegExp(
  "^(([a-z]+)\\.([a-z]+))(@aluno\\.feliz\\.ifrs\\.edu\\.br)$"
);

export const RegisterSchema = z.object({
  email: z
    .string()
    .nonempty("O email deve ser preenchido")
    //.email("O email deve ser válido")
    .min(3, "O email deve ter no mínimo 3 caracteres"),
    //.regex(regexEmail, "O email deve ser do IFRS"),
  sex: z.string().nonempty("O sexo deve ser preenchido"),
  age: z.string().nonempty("A idade deve ser preenchida"),
  password: z.string().nonempty("A senha deve ser preenchida"),
  description: z.string().nonempty("A descrição deve ser preenchida"),
  hoobies: z.string().nonempty("Preencha seus hoobies"),
});
