import { DetailFixer } from "@/components/public/fixers/DetailFIxer";
import apiFixers from "@/model/fixers/apiFixers";
import React from "react"

const FixerPage = async ({params: {id}}: {params: {id:string}}) => {

    const fixer = await apiFixers.detalle(id);

    console.log("-------------")
    console.log(fixer)
    return(
        <section className="container mx-auto px-4 mt-6">
            <DetailFixer fixer={fixer}/>
        </section>
    )
}

export default FixerPage