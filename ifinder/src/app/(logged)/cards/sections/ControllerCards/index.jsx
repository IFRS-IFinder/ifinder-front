"use client"

import { useState } from "react";
import { Card } from "../../components";
import { chat, trash } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ControllerCards({cards, page}){
    const { push } = useRouter();
    const [indexCard, setIndexCard] = useState(0)
    
    function nextCard(){    
        setIndexCard(oldIndex => oldIndex + 1)
        if(indexCard >= cards.length){
            push("?page=" + Number(page)+1)
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
      <button> 
        <Image src={chat} width={30} height={30} alt="Chat" />
      </button>

    </div>
    )
}