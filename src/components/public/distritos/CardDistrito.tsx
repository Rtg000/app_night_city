import { IDistrito } from "@/interfaces/IDistrito";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    distrito: IDistrito;
}

export const CardDistrito:FC<Props> = ({distrito}) => {
    return(
        <Card className="py-4 border-1 border-yellow-300  transition ease-in-out delay-10 hover:shadow-[0_0_13px_13px_rgba(255,0,0,1)] duration-275 ...">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{distrito.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap">
                <p className="text-tiny uppercase font-bold">{distrito.subdistrito}</p>
                {/* <Image alt="Imagen Choomba" src={choomba.img} width={300} height={300} className="object-contain"/> */}
            </CardBody>
        </Card>
    )    
}

