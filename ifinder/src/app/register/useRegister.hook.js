import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./schema";

export function useRegister(){
    const {formState: {erros}, register, handleSubmit, } = 
    useForm({defaultValues: {name: "", email: "", password: ""}, resolver: zodResolver(RegisterSchema)})

}