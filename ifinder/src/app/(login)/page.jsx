"use client"
import Link from "next/link";
import { useLogin } from "./useLogin.hook"
import s from "@/styles/home.module.scss"
import { APP_ROUTES } from "@/constants";
import { InputWrapper } from "@/components";

export default function Auth(){
    const {register, errors, handleSubmit, onSubmit, errorLogin, isLoading} = useLogin();

    return(
      <main>
        <h1>IFinder</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {errorLogin && <p>{errorLogin}</p>}
            {isLoading && <p>{isLoading}</p>}

            <InputWrapper text="email" error={errors.email?.message}>
              <input type="email" {...register("email")}/>
            </InputWrapper>

            <InputWrapper text="password" error={errors.password?.message}>
              <input type="password" {...register("password")}/>
            </InputWrapper>
            
            <button type="submit" disabled={isLoading}>Enviar</button>
        </form>
        <Link href={APP_ROUTES.REGISTER}>Criar conta</Link>
      </main>

    )
}