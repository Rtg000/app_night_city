import React from "react"
import { ICyberware } from "@/interfaces/ICyberware"
import { getCyberware } from "@/model/dataCyberware"
import { CardCyberwareList } from "@/components/public/cyberware/CardCyberwareList"

const CyberwarePage = async () => {

    const cyberware: ICyberware[] = await getCyberware()
    return(
        <> 
            <h1>Cyberware</h1>
            <CardCyberwareList cyberware={cyberware}/>
        </>
    )
}

export default CyberwarePage