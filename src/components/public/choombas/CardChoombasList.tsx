'use client'
import { IChoomba } from "@/interfaces/IChoomba"
import { FC } from "react"
import { CardChoomba } from "./CardChoomba"
import Link from "next/link";

interface Props {
    choombas: IChoomba[];
}

export const CardChoombasList:FC<Props> = ({choombas}) => {
    return(
        <section className="flex flex-wrap flex-row">
            {
            choombas.map((choomba) => (
                <article key={choomba.id} className="basis-1/3 p-3">
                    <Link href={`/public/choombas/${choomba.id}`}>
                        <CardChoomba choomba={choomba}/>
                    </Link>
                </article>
            ))
            }
        </section>
    )
}

// export default CardChoombas