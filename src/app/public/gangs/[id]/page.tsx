import apiGangs from "@/model/gangs/apiGangs";
import React from "react"

const GangPage = async ({params: {id}}: {params: {id:string}}) => {

    const gang = await apiGangs.detalle(id);

    console.log("-------------")
    console.log(gang)
    return(
        <section className="container mx-auto px-4 mt-6 border min-h-screen">
            <h1>Gang detalle {id}</h1>
            <h1>{gang.nombre}</h1>
        </section>
    )
}

export default GangPage