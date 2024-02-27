import { IGang } from "@/interfaces/IGang";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    gang: IGang;
}

export const CardGang:FC<Props> = ({gang}) => {
    return(
        <Card className="p-3 h-full border-1 border-yellow-300  transition ease-in-out delay-10 hover:shadow-[0_0_13px_13px_rgba(255,0,0,1)] duration-275 ...">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{gang.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap justify-center">
                <div className="flex overflow-hidden p-4 justify-center align-middle">
                    <Image alt="Imagen Gang" src={gang.img} width={300} height={300} className="object-contain max-h-[500px] w-[500px]"/>
                </div>
            </CardBody>
        </Card>
    )    
}

