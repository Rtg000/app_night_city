import React from "react"
import { IDistrito } from "@/interfaces/IDistrito"
import { getDistritos } from "@/model/dataDistritos"

const DistritosPage = async () => {

    const distritos: IDistrito[] = await getDistritos()
    return(
        <>
            <h1>Distritos</h1>
            <ul>
                {
                distritos.map((distrito: IDistrito) => (
                    <li key={distrito.id}>
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