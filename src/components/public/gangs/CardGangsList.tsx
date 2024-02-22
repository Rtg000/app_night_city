'use client'
import { IGang } from "@/interfaces/IGang";
import { FC } from "react"
import { CardGang } from "./CardGang"
import Link from "next/link";

interface Props {
    gangs: IGang[];
}

export const CardGangsList:FC<Props> = ({gangs}) => {
    return(
        <section className="flex flex-wrap flex-row">
            {
            gangs.map((gang) => (
                <article key={gang.id} className="basis-1/3 p-2">
                    <Link href={`/public/gangs/${gang.id}`}>
                        <CardGang gang={gang}/>
                    </Link>
                </article>
            ))
            }
        </section>
    )
}

// export default CardChoombas