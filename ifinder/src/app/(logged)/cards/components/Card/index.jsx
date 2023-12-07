import { ImageProfileFallback, SliderSwiper } from "@/components";
import { APP_ROUTES } from "@/constants";
import s from "@/styles/pages/cards/components/card.module.scss";
import Link from "next/link";

const settingsHighligthesSwiper = {
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 2000,
  effect: "cards",
  grabCursor: true,
  loop: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: 2,
      spaceBetween: 10,
      effect: "Flip",
    },
  },
};

export function Card({
  profileImage,
  name,
  age,
  idAuthor,
  description,
  hoobies,
  cardContent,
  sex,
}) {
  return (
    <div className={s.cardBoxHome}>
      <Link href={APP_ROUTES.PROFILE + idAuthor} className={s.profile}>
        <ImageProfileFallback src={profileImage} width={100} height={100} />
        <div>
          <h2>{name}</h2>
          <p>Idade: {age}</p>
          <p>Gênero: {sex}</p>
        </div>
      </Link>

      <SliderSwiper settings={settingsHighligthesSwiper}>
        <div className={s.cardInfo}>
          <h3>Informações do perfil</h3>
          <p>{description}</p>
          <p>{hoobies}</p>
        </div>
        <div className={s.cardInfo}>
          <h3>Conteudo da carta</h3>
          <p>{cardContent}</p>
        </div>
      </SliderSwiper>
    </div>
  );
}
