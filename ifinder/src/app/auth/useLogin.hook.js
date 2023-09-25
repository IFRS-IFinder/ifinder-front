import { useForm } from "react-hook-form"
import {zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./schema"

export function useLogin(){
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(LoginFormSchema)})

    function onSubmit(data){
        console.log(data)
    }

    return {register, handleSubmit, onSubmit, errors}
}

