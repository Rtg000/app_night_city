import React from "react"
import { IChoomba } from "@/interfaces/IChoomba"
import { getChoombas } from "@/model/dataChoombas"
import { CardChoombasList } from "../../../components/public/choombas/CardChoombasList"

const ChoombasPage = async () => {

    const choombas: IChoomba[] = await getChoombas()
    return(
        <>
            <h1>Choombas</h1>
            <CardChoombasList choombas={choombas}/>
        </>
    )
}

export default ChoombasPage