import { cardService, userService } from "@/services";
import { CardBox, ProfileBox } from "./components";
import { cookies } from "next/headers";
import { LOCAL_KEYS } from "@/constants";

export default async function Profile({ params }) {
  const idUser = params.id ?? JSON.parse(cookies().get(LOCAL_KEYS.USER).value).id
  const profileData = await userService.getSimpleById(idUser);
  const cardsData = await cardService.getByUserId(idUser);

  function renderCardsBox() {
    if (!cardsData.length) 
      return <p>Não há cartas disponíveis</p>;

    return cardsData.data.map((card) => (
      <CardBox id={card.id} key={card.id} content={card.textCard} />
    ));
  }

  return (
    <div>
      <ProfileBox
        name={profileData.name}
        age={profileData.age}
        imageProfile={profileData.imageProfile}
        description={profileData.description}
        hoobies={profileData.hoobies}
        isAuthor={profileData.isAuthor}
      />

      {renderCardsBox()}
    </div>
  );
}
