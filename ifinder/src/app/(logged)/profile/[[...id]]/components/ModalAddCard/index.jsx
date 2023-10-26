"use client";

import { InputWrapper } from "@/components";
import { useAddCard } from "./useAddCard";
import { useState } from "react";

export function ModalAddCard() {
  const [isActive, setIsActive] = useState(false);
  const { register, handleSubmit, onSubmit, errorAddCard, isLoading, errors } =
    useAddCard();

  if (!isActive)
    return <button onClick={() => setIsActive(true)}>Nova Carta</button>;

  return (
    <div>
      <button onClick={() => setIsActive(false)}>Cancelar</button>
      <h2>ModalAddCard</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper text="Conteúdo da carta" error={errors.content?.message}>
          <textarea rows="10" {...register("content")} />
        </InputWrapper>

        {isLoading && <p>{isLoading}</p>}
        {errorAddCard && <p>{errorAddCard}</p>}
        <button>Criar carta</button>
      </form>
    </div>
  );
}
