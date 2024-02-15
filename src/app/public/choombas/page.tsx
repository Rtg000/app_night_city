import React from "react"
import { IChoomba } from "@/interfaces/IChoomba"
import { getChoombas } from "@/model/dataChoomba"

const ChoombasPage = async () => {

    const choombas: IChoomba[] = await getChoombas()
    return(
        <>
            <h1 className="">Choombas</h1>
            <ul>
                {
                choombas.map((choomba: IChoomba) => (
                    <li>
                        {choomba.id}
                        {choomba.nombre}
                        {choomba.edad}
                        {choomba.gang?.id}
                        {choomba.gang?.nombre}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default ChoombasPage