import { DetailGang } from "@/components/public/gangs/DetailGang";
import apiGangs from "@/model/gangs/apiGangs";
import React from "react"

const GangPage = async ({params: {id}}: {params: {id:string}}) => {

    const gang = await apiGangs.detalle(id);

    console.log("-------------")
    console.log(gang)
    return(
        <section className="container mx-auto p-8">
            <DetailGang gang={gang}/>
        </section>
    )
}

export default GangPage