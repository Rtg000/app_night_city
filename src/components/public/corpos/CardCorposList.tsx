'use client'
import { ICorpo } from "@/interfaces/ICorpo";
import { FC } from "react"
import { CardCorpo } from "./CardCorpo"

interface Props {
    corpos: ICorpo[];
}

export const CardCorposList:FC<Props> = ({corpos}) => {
    return(
        <section>
            {
            corpos.map((corpo) => (
                <article key={corpo.id}>
                    <CardCorpo corpo={corpo}/>
                </article>
            ))
            }
        </section>
    )
}

// export default CardCorpos