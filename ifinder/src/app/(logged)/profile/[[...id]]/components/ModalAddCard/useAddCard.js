import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddCardSchema } from "./schema";
import { useState } from "react";
import axios from "axios";
import { ROUTE_HANDLERS } from "@/constants/routeHandlers";

export function useAddCard(){
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {content: ""}, resolver: zodResolver(AddCardSchema)})
    const [errorAddCard, setErrorAddCard] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(data){
        try{
            setIsLoading(true)
            axios.post(ROUTE_HANDLERS.ADD_CARD, data)
        } catch(error){
            setErrorAddCard(error.response?.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {register, handleSubmit, onSubmit, errors, errorAddCard, isLoading}
}