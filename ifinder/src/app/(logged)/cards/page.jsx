import { chat, trash } from "@/assets/images";
import { cardService } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./components/Card";


export default async function CardsPage({ searchParams }) {
  const page = searchParams.page ?? 1;
  //const cardsData = await cardService.getHome(page, 10);
  const cardsData = [
    {
      profileImage: "/node_modulesasd",
      name: "asd",
      age: "asd",
      description: "asd",
      hoobies: "asd",
      cardContent: "asd",
      sex: "asd",
    },
    {
      profileImage: "/node_modulesasd",
      name: "asd",
      age: "asd",
      description: "asd",
      hoobies: "asd",
      cardContent: "asd",
      sex: "asd",
    },
    {
      profileImage: "/node_modulesasd",
      name: "asd",
      age: "asd",
      description: "asd",
      hoobies: "asd",
      cardContent: "asd",
      sex: "asd",
    },
    {
      profileImage: "/node_modulesasd",
      name: "asd",
      age: "asd",
      description: "asd",
      hoobies: "asd",
      cardContent: "asd",
      sex: "asd",
    },
  ];

  function renderCards() {
    return cardsData.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        profileImage={card.profileImage}
        name={card.name}
        age={card.age}
        description={card.description}
        hoobies={card.hoobies}
        cardContent={card.cardContent}
        sex={card.sex}
      />
    ));
  }
  return (
    <div>
      <h1>Cards</h1>

        {renderCards()}

      <button>
        <Image src={trash} width={30} height={30} alt="Lixeira" />
      </button>
      <button>
        <Image src={chat} width={30} height={30} alt="Chat" />
      </button>
    </div>
  );
}
