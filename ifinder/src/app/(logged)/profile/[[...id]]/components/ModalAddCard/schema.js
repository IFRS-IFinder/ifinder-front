import { z } from "zod";

export const AddCardSchema = z.object({
    content: z.string().nonempty("O conteúdo não pode ser vazio"),
})
