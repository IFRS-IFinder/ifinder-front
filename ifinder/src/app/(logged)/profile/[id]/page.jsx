import { userService } from "@/services/cardService";
import { CardBox, ProfileBox } from "./components";

export default async function Profile({ params }) {
  const profileData = await userService.getById(params.id);

  function renderCardsBox() {
    return profileData.cards.map((card) => (
      <CardBox id={card.id} key={card.id} content={card.content} />
    ));
  }

  return (
    <div>
      <ProfileBox
        name={profileData}
        age={profileData}
        imageProfile={profileData}
        isAuthor={profileData}
      />
    {profileData && <button>Nova Carta</button>}

      {renderCardsBox()}
    </div>
  );
}
