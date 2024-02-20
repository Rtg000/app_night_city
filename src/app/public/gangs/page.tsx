import React from "react"
import { IGang } from "@/interfaces/IGang"

const GangsPage = async () => {

    async function getGangs() {
        const res = await fetch('http://172.31.10.253:3001/api/gang',{cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const gangs: IGang[] = await getGangs()
    return(
        <>
            <h1>Gangs</h1>
            <ul>
                {
                gangs.map((gang: IGang) => (
                    <li>
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