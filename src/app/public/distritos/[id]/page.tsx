import apiDistritos from "@/model/distritos/apiDistritos";
import React from "react"

const DistritoPage = async ({params: {id}}: {params: {id:string}}) => {

    const distrito = await apiDistritos.detalle(id);

    console.log("-------------")
    console.log(distrito)
    return(
        <section className="container mx-auto px-4 mt-6 border min-h-screen">
            <h1>Distrito detalle {id}</h1>
            <h2>{distrito.nombre}</h2>
        </section>
    )
}

export default DistritoPage