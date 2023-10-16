import {z} from "zod"

const regexEmail = new RegExp("^(([a-z]+)\\.([a-z]+))(@aluno\\.feliz\\.ifrs\\.edu\\.br)$")

export const RegisterSchema = z.object({
    name: z.string()
        .nonempty("O nome deve ser preenchido")
        .min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.string()
        .nonempty("O email deve ser preenchido")
        .email("O email deve ser válido")
        .min(3, "O email deve ter no mínimo 3 caracteres")
        .regex(regexEmail, "O email deve ser do IFRS"),
    password: z.string()
        .nonempty("A senha deve ser preenchida")
})
