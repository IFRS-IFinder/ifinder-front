import s from "@/styles/pages/profile/components/profile.module.scss"

export function CardBox({id, content}){
    return(
        <div className={s.card}>
            <h2>Carta: {id}</h2>
            {content}
        </div>
    )
}