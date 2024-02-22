import apiFixers from "@/model/fixers/apiFixers";
import React from "react"

const FixerPage = async ({params: {id}}: {params: {id:string}}) => {

    const fixer = await apiFixers.detalle(id);

    console.log("-------------")
    console.log(fixer)
    return(
        <section className="container mx-auto px-4 mt-6 border min-h-screen">
            <h1>Fixer detalle {id}</h1>
            <h2>{fixer.nombre}</h2>
        </section>
    )
}

export default FixerPage