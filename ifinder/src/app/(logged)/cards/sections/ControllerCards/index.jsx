"use client";

import { useState } from "react";
import { Card } from "../../components";
import { chat, trash } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { APP_ROUTES } from "@/constants";

export function ControllerCards({ cards, page }) {
  const { push } = useRouter();
  const [indexCard, setIndexCard] = useState(0);

  function nextCard() {
    const nextIndex = indexCard + 1;

    if (nextIndex < cards.length) {
      setIndexCard(nextIndex);
    } else {
      setIndexCard(0);
      push("?page=" + (Number(page) + 1));
    }
  }

  function renderCard() {
    if (!cards.length) 
      return <p>Não há cartas disponíveis</p>;

    const card = cards[indexCard];
    return (
      <Card
        key={card.idCard}
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

      <button onClick={nextCard}>
        <Image src={trash} width={30} height={30} alt="Lixeira" />
      </button>

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
