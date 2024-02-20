'use client'
import React from "react"
import { ICyberware } from "@/interfaces/ICyberware"
import { getCyberware } from "@/model/dataCyberware"
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import Image from "next/image"
import songbird from "../../../../public/img/Songbird_2.jpeg"

const CyberwarePage = async () => {
    const cyberware: ICyberware[] = await getCyberware()
    return(
        <> 
            <h1>Cyberware</h1>
            <section>
                {
                cyberware.map((cyberware: ICyberware) => (
                    <Card className="py-4 w-200">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h4 className="font-bold text-large">{cyberware.id}</h4>
                            <h4 className="font-bold text-large">{cyberware.nombre}</h4>
                            <h4 className="font-bold text-large">{cyberware.tipo}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image src={songbird} alt="songbird" width="300" height="300"/>
                        </CardBody>
                    </Card>
                ))
                }
            </section>
        </>
    )
}

export default CyberwarePage