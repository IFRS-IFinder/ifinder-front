"use client";

import { useState } from "react";
import { Card } from "../../components";
import { trash } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";


export function ControllerCards({ cards, page }) {
  const { push } = useRouter();
  const [indexCard, setIndexCard] = useState(0);

  function nextCard() {
    const nextIndex = indexCard + 1;

    if (nextIndex < cards.data.length) {
      setIndexCard(nextIndex);
    } else {
      setIndexCard(0);
      push("?page=" + (Number(page) + 1));
    }
  }

  function renderCard() {
    if (!cards.data.length) 
      return <p>Não há cartas disponíveis</p>;

    const card = cards.data[indexCard];
    return (
      <Card
        key={card.idCard}
        idAuthor={card.idAuthor}
        profileImage="/node_modulesasd"
        name={card.nameAuthor}
        age={card.ageAuthor}
        description={card.descriptionAuthor}
        hoobies={card.hoobiesAuthor}
        cardContent={card.textCard}
        sex={card.sexAuthor}
      />
    );
  }

  return (
    <div>
      {renderCard()}

      {!cards.lastPage &&
      <button onClick={nextCard}>
        <Image src={trash} width={30} height={30} alt="Lixeira" />
      </button>
      }

      {/*
        <Link
          href={
            APP_ROUTES.CHAT +
            "/user/" +
            cards[indexCard].idAuthor +
            "/card/" +
            cards[indexCard].idCard
          }
        >
          <Image src={chat} width={30} height={30} alt="Chat" />
        </Link>
    */}

    </div>
  );
}
