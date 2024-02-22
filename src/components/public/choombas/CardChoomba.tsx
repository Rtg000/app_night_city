import { IChoomba } from "@/interfaces/IChoomba";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    choomba: IChoomba;
}

export const CardChoomba:FC<Props> = ({choomba}) => {
    return(
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{choomba.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <p className="text-tiny uppercase font-bold">{choomba.edad}</p>
                <p className="text-tiny uppercase font-bold">{choomba.gang?.nombre}</p>
                <p className="text-tiny uppercase font-bold">{choomba.id}</p>
                {/* <small className="text-default-500">Dayumn</small> */}
                <Image alt="Imagen Choomba" src={choomba.img} width={300} height={300}/>
            </CardBody>
        </Card>
    )    
}

