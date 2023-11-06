"use client"

import { useState } from "react";
import { Card } from "../../components";
import { chat, trash } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { APP_ROUTES } from "@/constants";

export function ControllerCards({cards, page}){
    const { push } = useRouter();
    const [indexCard, setIndexCard] = useState(0)
    
    function nextCard(){
      const nextIndex = indexCard + 1

      if(nextIndex < cards.length){
        setIndexCard(nextIndex)
      } else{
        setIndexCard(0)
        push("?page=" + (Number(page)+1))
      }
    }

    function renderCard() {
        const card = cards[indexCard]
        return (
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
        );
    }

    return(
    <div>

      {renderCard()}

      <button onClick={nextCard}>
        <Image src={trash} width={30} height={30} alt="Lixeira" />
      </button>
      <Link href={APP_ROUTES.CHAT + "/user/" + cards[indexCard].userId + "/card/" + cards[indexCard].id}> 
        <Image src={chat} width={30} height={30} alt="Chat" />
      </Link>

    </div>
    )
}