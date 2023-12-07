"use client";
import { ImageProfileFallback } from "@/components";
import { logout } from "./logout.server";
import { useTransition } from "react";
import Link from "next/link";
import { APP_ROUTES } from "@/constants";
import { ModalAddCard } from "..";
import s from "@/styles/pages/profile/profileBox.module.scss";

export function ProfileBox({
  name,
  age,
  sex,
  imageProfile,
  isAuthor,
  description,
  hoobies,
}) {
  let [isPending, startTransition] = useTransition();

  return (
    <div className={s.profile}>
        <ImageProfileFallback
          src={imageProfile}
          width={100}
          height={100}
          alt="Foto de perfil"
        />
        
      <div className={s.profileInfos}>
        <p>{name}</p>
        <p>Idade: {age}</p>
        <p>Gênero: {sex}</p>
        <p>Descrição: {description}</p>
        <p>Hoobies: {hoobies}</p>
      </div>



      {isAuthor && (
        <>
          <div className={s.editProfile}>
            <button onClick={() => startTransition(logout)}>Sair</button>
            <Link href={APP_ROUTES.EDIT}>Editar perfil</Link>
          </div>
        </>
      )}
    </div>
  );
}
