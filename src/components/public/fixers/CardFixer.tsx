import { IFixer } from "@/interfaces/IFixer";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
    fixer: IFixer;
}

export const CardFixer:FC<Props> = ({fixer}) => {
    return(
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{fixer.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col flex-wrap">
                <p className="text-tiny uppercase font-bold">{fixer.edad}</p>
                <p className="text-tiny uppercase font-bold">{fixer.distrito?.nombre}</p>
                {/* <Image alt="Imagen Choomba" src={choomba.img} width={300} height={300} className="object-contain"/> */}
            </CardBody>
        </Card>
    )    
}

