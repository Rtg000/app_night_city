import apiCorpos from "@/model/corpos/apiCorpos";
import React from "react"

const CorpoPage = async ({params: {id}}: {params: {id:string}}) => {

    const corpo = await apiCorpos.detalle(id);

    console.log("-------------")
    console.log(corpo)
    return(
        <section className="container mx-auto px-4 mt-6 border min-h-screen">
            <h1>Corpo detalle {id}</h1>
            <h2>{corpo.nombre}</h2>
        </section>
    )
}

export default CorpoPage