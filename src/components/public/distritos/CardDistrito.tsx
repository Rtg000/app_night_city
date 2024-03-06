import { IDistrito } from "@/interfaces/IDistrito";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    distrito: IDistrito;
}

export const CardDistrito:FC<Props> = ({distrito}) => {
    return(
        <Card className="p-3 flex flex-row flex-nowrap border-1 border-yellow-400  transition ease-in-out delay-10 hover:shadow-[0_0_13px_13px_rgba(255,0,0,1)] duration-275 ...">
            <CardHeader className="py-1 px-3 flex-col items-start basis-1/3 justify-center">
                <Image alt="Imagen Distrito" src={distrito.img} width={175} height={175} className="object-contain"/>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap basis-2/3">
                <h1 className="font-bold text-large">{distrito.nombre}</h1>
            </CardBody>
        </Card>
    )    
}

