import React from "react"
import { IDistrito } from "@/interfaces/IDistrito"

const DistritosPage = async () => {

    async function getDistritos() {
        const res = await fetch('http://192.168.8.71:3001/api/distrito',{cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const distritos: IDistrito[] = await getDistritos()
    return(
        <>
            <h1>Distritos</h1>
            <ul>
                {
                distritos.map((distrito: IDistrito) => (
                    <li>
                        {distrito.id}
                        {distrito.nombre}
                        {distrito.subdistrito}
                        {/* {distrito.fixers} */}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default DistritosPage