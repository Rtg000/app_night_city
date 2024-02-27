'use client'
import { ICyberware } from "@/interfaces/ICyberware";
import { FC } from "react"
import { CardCyberware } from "./CardCyberware"
import Link from "next/link";

interface Props {
    cyberware: ICyberware[];
}

export const CardCyberwareList:FC<Props> = ({cyberware}) => {
    return(
        <section className="flex flex-wrap flex-row">
            {
            cyberware.map((cyberware) => (
                <article key={cyberware.id} className="basis-1/3 p-3">
                    <Link href={`/public/cyberware/${cyberware.id}`}>
                        <CardCyberware cyberware={cyberware}/>
                    </Link>
                </article>
            ))
            }
        </section>
    )
}

// export default Cardcyberwares