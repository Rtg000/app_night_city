import { ICorpo } from "@/interfaces/ICorpo";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    corpo: ICorpo;
}

export const CardCorpo:FC<Props> = ({corpo}) => {
    return(
        <Card className="p-3 h-full border-1 border-yellow-400  transition ease-in-out delay-10 hover:shadow-[0_0_13px_13px_rgba(255,0,0,1)] duration-275 ...">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{corpo.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap justify-center">
                <Image alt="Imagen Corpo" src={corpo.img} width={300} height={300} className="object-contain max-h-[500px] w-[500px]"/>
            </CardBody>
        </Card>
    )    
}

