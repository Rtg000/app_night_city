import apiChoombas from "@/model/choombas/apiChoombas";
import React from "react"

const ChoombaPage = async ({params: {id}}: {params: {id:string}}) => {

    const choomba = await apiChoombas.detalle(id);

    console.log("-------------")
    console.log(choomba)
    return(
        <section className="container mx-auto px-4 mt-6 border min-h-screen">
            <h1>Choomba detalle {id}</h1>
            <h2>{choomba.nombre}</h2>
        </section>
    )
}

export default ChoombaPage