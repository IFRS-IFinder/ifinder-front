"use client";

import { InputWrapper } from "@/components";
import { useEdit } from "./useEdit.hook";

export function FormEditUser({ user }) {
  const { register, errors, handleSubmit, onSubmit, errorEdit, isLoading } = useEdit(user);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorEdit && <p>{errorEdit}</p>}
      {isLoading && <p>Carregando...</p>}

      <InputWrapper text="email" error={errors.email?.message}>
        <input type="email" {...register("email")} />
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

      <button disabled={isLoading}>Editar conta</button>
    </form>
  );
}
