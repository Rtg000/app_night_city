import apiCyberware from "@/model/cyberware/apiCyberware";
import React from "react"

const CyberwPage = async ({params: {id}}: {params: {id:string}}) => {

    const cyberware = await apiCyberware.detalle(id);

    console.log("-------------")
    console.log(cyberware)
    return(
        <section className="container mx-auto px-4 mt-6 border min-h-screen">
            <h1>Cyberware detalle ${id}</h1>
        </section>
    )
}

export default CyberwPage