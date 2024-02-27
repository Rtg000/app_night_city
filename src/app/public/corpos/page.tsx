import React from "react"
import { ICorpo } from "@/interfaces/ICorpo"
import { CardCorposList } from "@/components/public/corpos/CardCorposList"
import apiCorpos from "@/model/corpos/apiCorpos"

const CorposPage = async () => {

    const corpos: ICorpo[] = await apiCorpos.listar()
    return(
        <>
            <CardCorposList corpos={corpos}/>
        </>
    )
}

export default CorposPage