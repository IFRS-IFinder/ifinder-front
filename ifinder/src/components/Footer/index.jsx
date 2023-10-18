"use client"
import { APP_ROUTES } from "@/constants";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import s from "@/styles/Footer.module.scss"

export function Footer(){
    const pathname = usePathname()

    const classNameCards = pathname.includes(APP_ROUTES.CARDS) ? `${s.activeLink} ${s.linkFooter}` : `${s.linkFooter}`
    const classNameChat = pathname.includes(APP_ROUTES.CHAT) ? `${s.activeLink} ${s.linkFooter}` : `${s.linkFooter}`
    const classNameProfile = pathname.includes(APP_ROUTES.PROFILE) ? `${s.activeLink} ${s.linkFooter}` : `${s.linkFooter}`

    return(
        <footer>
            <Link className={classNameCards} href={APP_ROUTES.CARDS}>Home</Link>
            <Link className={classNameChat} href={APP_ROUTES.CHAT}>chat</Link>
            <Link className={classNameProfile} href={APP_ROUTES.PROFILE}>profile</Link>
        </footer>
    )
}