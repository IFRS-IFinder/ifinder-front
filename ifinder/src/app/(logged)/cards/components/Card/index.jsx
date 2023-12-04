import { ImageProfileFallback, SliderSwiper } from "@/components";
import s from "@/styles/pages/cards/components/card.module.scss";

const settingsHighligthesSwiper = {
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 2000,
  effect: 'cards',
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: 2,
      spaceBetween: 10,
      effect: 'Flip',
    },
  },
};

export function Card({
  profileImage,
  name,
  age,
  description,
  hoobies,
  cardContent,
  sex,
}) {
  return (
    <div className={s.cardBoxHome}>
      <div>
        <ImageProfileFallback src={profileImage} width={100} height={100} />
        <h2>{name}</h2>
        {age}
        {sex}
      </div>

      <SliderSwiper settings={settingsHighligthesSwiper}>
        <div>
          <p>{description}</p>
          <p>{hoobies}</p>
        </div>
        <div>
          <p>{cardContent}</p>
        </div>
      </SliderSwiper>
    </div>
  );
}
