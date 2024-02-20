import React from "react"
import { ICorpo } from "@/interfaces/ICorpo"

const CorposPage = async () => {

    async function getCorpos() {
        const res = await fetch('http://172.31.10.253:3001/api/corpo',{cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const corpos: ICorpo[] = await getCorpos()
    return(
        <>
            <h1>Corpos</h1>
            <ul>
                {
                corpos.map((corpo: ICorpo) => (
                    <li>
                        {corpo.id}
                        {corpo.nombre}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default CorposPage