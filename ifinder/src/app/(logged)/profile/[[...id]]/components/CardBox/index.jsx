
import s from "@/styles/pages/profile/cardbox.module.scss"

export function CardBox({content}){
    return(
        <div className={s.card}>
            <h2>Carta</h2>
            {content}
        </div>
    )
}