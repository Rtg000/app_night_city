import React from "react"
import { ICyberware } from "@/interfaces/ICyberware"

const CyberwarePage = async () => {

    async function getCyberware() {
        const res = await fetch('http://192.168.8.71:3001/api/cyberware',{cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const cyberware: ICyberware[] = await getCyberware()
    return(
        <>
            <h1>Cyberware</h1>
            <ul>
                {
                cyberware.map((cyberware: ICyberware) => (
                    <li>
                        {cyberware.id}
                        {cyberware.nombre}
                        {cyberware.tipo}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default CyberwarePage