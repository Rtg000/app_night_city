'use client'
import { IFixer } from "@/interfaces/IFixer";
import { FC } from "react"
import { CardFixer } from "./CardFixer"
import Link from "next/link";

interface Props {
    fixers: IFixer[];
}

export const CardFixersList:FC<Props> = ({fixers}) => {
    return(
        <section className="flex flex-wrap flex-row">
            {
            fixers.map((fixer) => (
                <article key={fixer.id} className="basis-1/3 p-3">
                    <Link href={`/public/fixers/${fixer.id}`}>
                        <CardFixer fixer={fixer}/>
                    </Link>
                </article>
            ))
            }
        </section>
    )
}

// export default CardChoombas