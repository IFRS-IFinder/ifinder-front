"use client"
import { InputWrapper } from "@/components";
import { useRegister } from "./useRegister.hook";
import Link from "next/link";
import s from "@/styles/pages/login.module.scss"
import { APP_ROUTES } from "@/constants";

export default function Register() {
  const { register, errors, handleSubmit, onSubmit, errorRegister, isLoading } =
    useRegister();

  return (
    <main className={s.body}>
      <div className={s.div}>
      <h1 className={s.h1}>Crie sua conta</h1>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {errorRegister && <p>{errorRegister}</p>}
        {isLoading && <p>{isLoading}</p>}

        <InputWrapper text="email" error={errors.email?.message}>
          <input type="email" {...register("email")} />
        </InputWrapper>

        <InputWrapper text="password" error={errors.password?.message}>
          <input type="password" {...register("password")} />
        </InputWrapper>

        <InputWrapper text="sex" error={errors.sex?.message}>
          <input type="text" {...register("sex")} />
        </InputWrapper>

        <InputWrapper text="age" error={errors.age?.message}>
          <input type="text" {...register("age")} />
        </InputWrapper>

        <InputWrapper text="hoobies" error={errors.hoobies?.message}>
          <input type="text" {...register("hoobies")} />
        </InputWrapper>

        <InputWrapper text="description" error={errors.description?.message}>
          <textarea
            cols="5"
            {...register("description")}
            placeholder="Descrição"
          />
        </InputWrapper>

        <button className={s.button} disabled={isLoading}>Criar conta</button>
        <Link href={APP_ROUTES.HOME}>Voltar</Link>
      </form>
    </div>
    </main>
    
  );
}
