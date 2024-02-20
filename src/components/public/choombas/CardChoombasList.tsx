'use client'
import { IChoomba } from "@/interfaces/IChoomba"
import { getChoombas } from "@/model/dataChoomba"
import { Card, CardHeader, CardBody } from "@nextui-org/react"
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
                <article>
                    <CardChoomba key={choomba.id} choomba={choomba}/>
                </article>
            ))
            }
        </section>
    )
}

// export default CardChoombas