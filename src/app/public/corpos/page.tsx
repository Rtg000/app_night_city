import React from "react"
import { ICorpo } from "@/interfaces/ICorpo"
import { getCorpos } from "@/model/dataCorpos"
import { CardCorposList } from "@/components/public/corpos/CardCorposList"

const CorposPage = async () => {

    const corpos: ICorpo[] = await getCorpos()
    return(
        <>
            <h1>Corpos</h1>
            <CardCorposList corpos={corpos}/>
        </>
    )
}

export default CorposPage