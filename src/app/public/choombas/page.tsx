import React from "react"
import { IChoomba } from "@/interfaces/IChoomba"

const ChoombasPage = async () => {

    async function getChoombas() {
        const res = await fetch('http://192.168.8.71:3001/api/choomba',{cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const choombas: IChoomba[] = await getChoombas()
    return(
        <>
            <h1>Choombas</h1>
            <ul>
                {
                choombas.map((choomba: IChoomba) => (
                    <li>
                        {choomba.id}
                        {choomba.nombre}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default ChoombasPage