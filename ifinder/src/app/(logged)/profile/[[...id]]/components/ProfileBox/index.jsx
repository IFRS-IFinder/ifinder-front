"use client"
import { ImageProfileFallback } from "@/components";
import { logout } from "./logout.server";
import { useTransition } from "react";
import Link from "next/link";
import { APP_ROUTES } from "@/constants";
import { ModalAddCard } from "..";


export function ProfileBox({ name, age, sex, imageProfile, isAuthor, description, hoobies }) { 
  let [isPending, startTransition] = useTransition()

  return (
    <div>
      <ImageProfileFallback src={imageProfile} width={30} height={30} alt="Foto de perfil" />
      {name}
      {age}
      {sex}

      <p>{description}</p>
      <p>{hoobies}</p>

      {isAuthor && (
        <>
        <div>
          <button onClick={() => startTransition(logout)}>Sair</button>
          <Link href={APP_ROUTES.EDIT}>Editar perfil</Link>
        </div>

        <ModalAddCard />
        </>
      )}
    </div>
  );
}
