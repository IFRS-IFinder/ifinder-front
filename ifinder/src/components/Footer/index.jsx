import { APP_ROUTES } from "@/constants";
import Link from "next/link";
import s from "@/styles/components/Footer.module.scss"
import { cards, chat, profile } from "@/assets/images";
import Image from "next/image";

export function Footer(){
    return(
        <footer className={s.footer}>
            <div>
                <Link href={APP_ROUTES.CARDS}><Image src={cards} width={35} height={35} alt="cards icon" /></Link>
                <Link href={APP_ROUTES.CHAT}><Image src={chat} width={44} height={44} alt="cards icon" /></Link>
                <Link href={APP_ROUTES.PROFILE}><Image src={profile} width={35} height={35} alt="cards icon" /></Link>
            </div>
        </footer>
    )
}