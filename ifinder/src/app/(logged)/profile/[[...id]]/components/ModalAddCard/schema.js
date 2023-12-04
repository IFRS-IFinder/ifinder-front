import { z } from "zod";

export const AddCardSchema = z.object({
    text: z.string().nonempty("O conteúdo não pode ser vazio"),
})
