import React from "react"
import { IGang } from "@/interfaces/IGang"
import apiGangs from "@/model/gangs/apiGangs"
import { CardGangsList } from "@/components/public/gangs/CardGangsList"

const GangsPage = async () => {

    const gangs: IGang[] = await apiGangs.listar()
    return(
        <>
            <h1>Gangs</h1>
            <CardGangsList gangs={gangs}/>
        </>
    )
}

export default GangsPage