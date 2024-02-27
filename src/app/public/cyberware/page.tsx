import React from "react"
import { ICyberware } from "@/interfaces/ICyberware"
import { CardCyberwareList } from "@/components/public/cyberware/CardCyberwareList"
import apiCyberware from "@/model/cyberware/apiCyberware"

const CyberwarePage = async () => {

    const cyberware: ICyberware[] = await apiCyberware.listar()
    return(
        <> 
            <CardCyberwareList cyberware={cyberware}/>
        </>
    )
}

export default CyberwarePage