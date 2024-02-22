import React from "react"
import { IFixer } from "@/interfaces/IFixer"
import { getFixers } from "@/model/dataFixers"

const FixersPage = async () => {

    const fixers: IFixer[] = await getFixers()
    return(
        <>
            <h1>Fixers</h1>
            <ul>
                {
                fixers.map((fixer: IFixer) => (
                    <li key={fixer.id}>
                        {fixer.id}
                        {fixer.nombre}
                        {fixer.edad}
                        {fixer.distrito?.id}
                        {fixer.distrito?.nombre}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default FixersPage