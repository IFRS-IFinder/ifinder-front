"use client"
import Link from "next/link";
import { useLogin } from "./auth/useLogin.hook"
import s from "@/styles/home.module.scss"
import { APP_ROUTES } from "@/constants";

export default function Auth(){
    const {register, errors, handleSubmit, onSubmit, errorLogin, isLoading} = useLogin();

    return(
      <main>
        <h1>IFinder</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {errorLogin && <p>{errorLogin}</p>}
            {isLoading && <p>{isLoading}</p>}

            <input type="text" {...register("email")}/>
            {errors.email?.message && <p>{errors.email?.message}</p>}

            <input type="password" {...register("password")}/>
            {errors.password?.message && <p>{errors.password?.message}</p>}
            
            <button type="submit" disabled={isLoading}>Enviar</button>
        </form>
        <Link href={APP_ROUTES.REGISTER}>Criar conta</Link>
      </main>

    )
}