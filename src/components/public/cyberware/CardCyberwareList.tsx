'use client'
import { ICyberware } from "@/interfaces/ICyberware";
import { FC } from "react"
import { CardCyberware } from "./CardCyberware"

interface Props {
    cyberware: ICyberware[];
}

export const CardCyberwareList:FC<Props> = ({cyberware}) => {
    return(
        <section>
            {
            cyberware.map((cyberware) => (
                <article key={cyberware.id}>
                    <CardCyberware cyberware={cyberware}/>
                </article>
            ))
            }
        </section>
    )
}

// export default Cardcyberwares