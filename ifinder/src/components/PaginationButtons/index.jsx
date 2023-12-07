"use client";
import { useRouter } from "next/navigation"
import s from "@/styles/components/Pagination.module.scss"

export function PaginationButtons({ page, totalPages, isLastPage }) {
    const {replace} = useRouter()

    const isFirstPage = page === 1

    function handlePage(number) {
        const nextPage = Number(page) + number
        const urlParamsPage = new URLSearchParams({page: nextPage})
        replace("?" + urlParamsPage)
    }

    return(
        <div className={s.pagination}>
            <button disabled={isFirstPage} onClick={() => handlePage(-1)}>Voltar</button>
            <p>{page}/{totalPages}</p>
            <button disabled={isLastPage} onClick={() => handlePage(1)}>Próximo</button>
        </div>
    )
}
