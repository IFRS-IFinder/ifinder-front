"use client"
import Link from "next/link";
import { useLogin } from "./useLogin.hook"
import s from "@/styles/pages/login.module.scss"
import { APP_ROUTES } from "@/constants";
import { InputWrapper } from "@/components";

export default function Auth(){
    const {register, errors, handleSubmit, onSubmit, errorLogin, isLoading} = useLogin();

    return(
      <main className={s.body}>
        <div className={s.div}>
          <h1 className={s.h1}>IFinder</h1>
        
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            {errorLogin && <p>{errorLogin}</p>}
            {isLoading && <p>{isLoading}</p>}

            <InputWrapper text="Email" error={errors.email?.message}>
              <input  type="email" {...register("email")}/>
            </InputWrapper>

            <InputWrapper  text="Senha" error={errors.password?.message}>
              <input type="password" {...register("password")}/>
            </InputWrapper>
            
            <button className={s.button} type="submit" disabled={isLoading}>Enviar</button>
        </form>
        <div className={s.criar}  >
          <Link className={s.h1} href={APP_ROUTES.REGISTER}>Criar conta</Link>
        </div>
        
        </div>
      </main>

    )
}