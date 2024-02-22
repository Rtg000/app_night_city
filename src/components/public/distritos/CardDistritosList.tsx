'use client'
import { IDistrito } from "@/interfaces/IDistrito";
import { FC } from "react"
import { CardDistrito } from "./CardDistrito"
import Link from "next/link";

interface Props {
    distritos: IDistrito[];
}

export const CardDistritosList:FC<Props> = ({distritos}) => {
    return(
        <section className="flex flex-wrap flex-row">
            {
            distritos.map((distrito) => (
                <article key={distrito.id} className="basis-1/3 p-2">
                    <Link href={`/public/distritos/${distrito.id}`}>
                        <CardDistrito distrito={distrito}/>
                    </Link>
                </article>
            ))
            }
        </section>
    )
}

// export default CardChoombas