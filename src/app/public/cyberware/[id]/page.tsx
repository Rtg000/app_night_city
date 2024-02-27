import { DetailCyberware } from "@/components/public/cyberware/DetailCyberware";
import apiCyberware from "@/model/cyberware/apiCyberware";
import React from "react"

const CyberwPage = async ({params: {id}}: {params: {id:string}}) => {

    const cyberware = await apiCyberware.detalle(id);

    console.log("-------------")
    console.log(cyberware)
    return(
        <section className="container mx-auto px-4 mt-6">
            <DetailCyberware cyberware={cyberware}/>
        </section>
    )
}

export default CyberwPage