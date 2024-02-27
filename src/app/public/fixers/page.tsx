import React from "react"
import { IFixer } from "@/interfaces/IFixer"
import apiFixers from "@/model/fixers/apiFixers"
import { CardFixersList } from "@/components/public/fixers/CardFixersList"

const FixersPage = async () => {

    const fixers: IFixer[] = await apiFixers.listar()
    return(
        <>
            <CardFixersList fixers={fixers}/>
        </>
    )
}

export default FixersPage