import { z } from "zod";

export const AddCardSchema = z.object({
    content: z.string().nonempty("O conteudo da carta é obrigatório")
})
