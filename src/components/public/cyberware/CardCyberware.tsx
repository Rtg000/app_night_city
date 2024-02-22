import { ICyberware } from "@/interfaces/ICyberware";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FC } from "react";

interface Props {
    cyberware: ICyberware;
}

export const CardCyberware:FC<Props> = ({cyberware}) => {
    return(
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{cyberware.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <p className="text-tiny uppercase font-bold">{cyberware.nombre}</p>
                <p className="text-tiny uppercase font-bold">{cyberware.tipo}</p>
                <p className="text-tiny uppercase font-bold">{cyberware.id}</p>
            </CardBody>
        </Card>
    )    
}

