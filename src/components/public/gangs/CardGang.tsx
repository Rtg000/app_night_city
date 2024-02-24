import { IGang } from "@/interfaces/IGang";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    gang: IGang;
}

export const CardGang:FC<Props> = ({gang}) => {
    return(
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{gang.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap">
                <p className="text-tiny uppercase font-bold">{gang.id}</p>
                <Image alt="Imagen Gang" src={gang.img} width={300} height={300} className="object-contain"/>
            </CardBody>
        </Card>
    )    
}

