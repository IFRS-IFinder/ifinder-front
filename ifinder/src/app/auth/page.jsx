"use client"
import { useLogin } from "./useLogin.hook"

export default function Auth(){
    const {register, errors, handleSubmit, onSubmit} = useLogin();

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")}/>
            {errors.email?.message && <p>{errors.email?.message}</p>}

            <input type="password" {...register("password")}/>
            {errors.password?.message && <p>{errors.password?.message}</p>}
            <button type="submit">Enviar</button>
        </form>
    )
}