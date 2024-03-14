import { DetailChoomba } from "@/components/public/choombas/DetailChoomba";
import apiChoombas from "@/model/choombas/apiChoombas";
import React from "react"

const ChoombaPage = async ({params: {id}}: {params: {id:string}}) => {

    const choomba = await apiChoombas.detalle(id);

    console.log("-------------")
    console.log(choomba)
    return(
        <section className="container mx-auto p-8">
            <DetailChoomba choomba={choomba}/>
        </section>
    )
}

export default ChoombaPage