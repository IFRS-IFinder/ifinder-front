import { chat, trash } from "@/assets/images";
import Image from "next/image";

export default async function CardsPage(){
    return(
        <div>
            <h1>Cards</h1>

            <button><Image src={trash} width={30} height={30} alt="Lixeira" /></button>
            <button><Image src={chat} width={30} height={30} alt="Chat" /></button>
        </div>
    )
}