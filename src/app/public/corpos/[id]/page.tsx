import { DetailCorpo } from "@/components/public/corpos/DetailCorpo";
import apiCorpos from "@/model/corpos/apiCorpos";
import React from "react"

const CorpoPage = async ({params: {id}}: {params: {id:string}}) => {

    const corpo = await apiCorpos.detalle(id);

    console.log("-------------")
    console.log(corpo)
    return(
        <section className="container mx-auto p-8">
            <DetailCorpo corpo={corpo}/>
        </section>
    )
}

export default CorpoPage