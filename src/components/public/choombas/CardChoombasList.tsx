'use client'
import { IChoomba } from "@/interfaces/IChoomba"
import { FC } from "react"
import { CardChoomba } from "./CardChoomba"

interface Props {
    choombas: IChoomba[];
}

export const CardChoombasList:FC<Props> = ({choombas}) => {
    return(
        <section>
            {
            choombas.map((choomba) => (
                <article key={choomba.id}>
                    <CardChoomba choomba={choomba}/>
                </article>
            ))
            }
        </section>
    )
}

// export default CardChoombas