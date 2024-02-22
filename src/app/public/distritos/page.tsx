import React from "react"
import { IDistrito } from "@/interfaces/IDistrito"
import { CardDistritosList } from "@/components/public/distritos/CardDistritosList"
import apiDistritos from "@/model/distritos/apiDistritos"

const DistritosPage = async () => {

    const distritos: IDistrito[] = await apiDistritos.listar()
    return(
        <>
            <h1>Distritos</h1>
            <CardDistritosList distritos={distritos}/>
        </>
    )
}

export default DistritosPage