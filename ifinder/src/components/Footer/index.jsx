import { APP_ROUTES } from "@/constants";
import Link from "next/link";

export function Footer(){
    return(
        <footer>
            <Link href={APP_ROUTES.CARDS}>Home</Link>
            <Link href={APP_ROUTES.CHAT}>chat</Link>
            <Link href={APP_ROUTES.PROFILE}>profile</Link>
        </footer>
    )
}