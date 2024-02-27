'use client'
import { ICorpo } from "@/interfaces/ICorpo";
import { FC } from "react"
import { CardCorpo } from "./CardCorpo"
import Link from "next/link";

interface Props {
    corpos: ICorpo[];
}

export const CardCorposList:FC<Props> = ({corpos}) => {
    return(
        <section className="flex flex-wrap flex-row">
            {
            corpos.map((corpo) => (
                <article key={corpo.id} className="basis-1/3 p-3">
                    <Link href={`/public/corpos/${corpo.id}`}>
                        <CardCorpo corpo={corpo}/>
                    </Link>
                </article>
            ))
            }
        </section>
    )
}

// export default CardCorpos