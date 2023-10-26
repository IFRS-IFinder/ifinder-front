import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddCardSchema } from "./schema";
import { useState } from "react";

export function useAddCard(){
    const {register, formState: {errors}, handleSubmit} = useForm({resolver: zodResolver(AddCardSchema)})
    const [isLoading, setIsLoading] = useState(false)
    const [errorAddCard, setErrorAddCard] = useState(null)

    async function onSubmit(){
        try {
            setIsLoading(true);
            await axios.post(ROUTE_HANDLERS.CARD, {
              content: data.content
            });
          } catch (error) {
            setErrorAddCard(error.response?.message);
          } finally {
            setIsLoading(false);
          }
    }

    return {register, errors, isLoading, errorAddCard, handleSubmit, onSubmit}
}