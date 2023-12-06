import { cardService, userService } from "@/services";
import { CardBox, ProfileBox } from "./components";
import { cookies } from "next/headers";
import { LOCAL_KEYS } from "@/constants";
import { PaginationButtons } from "@/components";
import { Toast } from "@/components/Toast";

export default async function Profile({ params, searchParams }) {
  const page = searchParams.page ?? 1;
  const idUser = params.id ?? JSON.parse(cookies().get(LOCAL_KEYS.USER).value).id
  const profileData = await userService.getSimpleById(idUser);

  const cardsData = await cardService.getByUserId(idUser, page);

  function renderCardsBox() {
    if (!cardsData.data.length) 
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

      <PaginationButtons page={page} totalPages={cardsData.totalPages} isLastPage={cardsData.isLastPage} />
    </div>
  );
}
