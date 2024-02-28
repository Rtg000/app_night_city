import { IChoomba } from "@/interfaces/IChoomba";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    choomba: IChoomba;
}

export const CardChoomba:FC<Props> = ({choomba}) => {
    return(
        <Card className="p-3 h-full border-1 border-yellow-400  transition ease-in-out delay-10 hover:shadow-[0_0_13px_13px_rgba(255,0,0,1)] duration-275 ...">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h1 className="font-bold text-large">{choomba.nombre}</h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap justify-end">
                <h3 className="text-tiny uppercase font-bold">{choomba.edad}</h3>
                <h3 className="text-tiny uppercase font-bold">{choomba.gang?.nombre}</h3>
                <Image alt="Imagen Choomba" src={choomba.img} width={250} height={250} className="object-contain max-h-[500px] w-[500px]"/>
            </CardBody>
        </Card>
    )    
}

