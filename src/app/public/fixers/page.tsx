import React from "react"
import { IFixer } from "@/interfaces/IFixer"

const FixersPage = async () => {

    async function getFixers() {
        const res = await fetch('http://192.168.8.71:3001/api/fixer',{cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const fixers: IFixer[] = await getFixers()
    return(
        <>
            <h1>Fixers</h1>
            <ul>
                {
                fixers.map((fixer: IFixer) => (
                    <li>
                        {fixer.id}
                        {fixer.nombre}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default FixersPage