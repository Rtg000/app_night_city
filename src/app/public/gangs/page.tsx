import React from "react"
import { IGang } from "@/interfaces/IGang"
import { getGangs } from "@/model/dataGangs"

const GangsPage = async () => {

    const gangs: IGang[] = await getGangs()
    return(
        <>
            <h1>Gangs</h1>
            <ul>
                {
                gangs.map((gang: IGang) => (
                    <li key={gang.id}>
                        {gang.id}
                        {gang.nombre}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default GangsPage