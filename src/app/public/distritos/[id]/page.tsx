import { DetailDistrito } from "@/components/public/distritos/DetailDistrito";
import apiDistritos from "@/model/distritos/apiDistritos";
import React from "react"

const DistritoPage = async ({params: {id}}: {params: {id:string}}) => {

    const distrito = await apiDistritos.detalle(id);

    console.log("-------------")
    console.log(distrito)
    return(
        <section className="container mx-auto p-8">
            <DetailDistrito distrito={distrito}/>
        </section>
    )
}

export default DistritoPage