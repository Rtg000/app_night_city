import React from "react"
import { IChoomba } from "@/interfaces/IChoomba"
import { CardChoombasList } from "../../../components/public/choombas/CardChoombasList"
import apiChoombas from "@/model/choombas/apiChoombas"

const ChoombasPage = async () => {

    const choombas: IChoomba[] = await apiChoombas.listar()
    return(
        <>
            <CardChoombasList choombas={choombas}/>
        </>
    )
}

export default ChoombasPage