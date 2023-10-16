import { useForm } from "react-hook-form"
import {zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./schema"
import {cookies} from "next/headers"
import { LOCAL_KEYS } from "@/constants"
import { authService } from "@/services/authService"
import axios from "axios"
import { useState } from "react"

export function useLogin(){
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(LoginFormSchema)})
    const [errorLogin, setErrorLogin] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(data){
        "use server"
        
        try{
            setIsLoading(true)
            const dataUser = authService.auth(data.email, data.password)

            cookies().set({
                name: LOCAL_KEYS.USER, 
                value: {
                    name: dataUser.name,
                }
                }
            )

            cookies().set({
                name: LOCAL_KEYS.TOKEN, 
                value: dataUser.token
                })

        } catch(error){
            setErrorLogin(error.response?.message)
        } finally{
            setIsLoading(false)
        }
        
    }

    return {register, handleSubmit, onSubmit, errors, errorLogin, isLoading}
}

