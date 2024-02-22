import { ICorpo } from "@/interfaces/ICorpo";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FC } from "react";

interface Props {
    corpo: ICorpo;
}

export const CardCorpo:FC<Props> = ({corpo}) => {
    return(
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{corpo.nombre}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <p className="text-tiny uppercase font-bold">{corpo.nombre}</p>
                <p className="text-tiny uppercase font-bold">{corpo.id}</p>
            </CardBody>
        </Card>
    )    
}

