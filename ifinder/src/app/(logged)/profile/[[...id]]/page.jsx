import { userService } from "@/services";
import { CardBox, ProfileBox } from "./components";

export default async function Profile({ params }) {
  //  const profileData = await userService.getById(params.id);
  const profileData = {
    name: "name",
    age: "123",
    sex: "femea",
    imageProfile: "/name",
    cards: [
      { id: 1, content: "asd" },
      { id: 2, content: "aaa" },
      { id: 3, content: "bbbbb" },
    ],
    isAuthor: true,
  };

  function renderCardsBox() {
    return profileData.cards.map((card) => (
      <CardBox id={card.id} key={card.id} content={card.content} />
    ));
  }

  return (
    <div>
      <ProfileBox
        name={profileData.name}
        age={profileData.age}
        imageProfile={profileData.imageProfile}
        isAuthor={profileData.isAuthor}
      />
      {profileData.isAuthor && <button>Nova Carta</button>}

      {renderCardsBox()}
    </div>
  );
}
