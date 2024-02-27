'use client'
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';
import { ICyberware } from '@/interfaces/ICyberware';
// import Image from 'next/image'


interface Props {
    cyberware: ICyberware
}

export const DetailCyberware:FC<Props> = ({ cyberware }) => {
    
    return(
        <Card className="py-4 flex flex-row flex-nowrap border-3 border-yellow-300">
            <CardHeader className="pb-0 pt-2 p-2 basis-1/4 flex justify-center">
                <Image 
                    alt="Card background"
                    // className="object-cover "
                    src={cyberware.img}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3">
                <h1 className="pb-3 mb-2 border-b-2 border-yellow-400">Nombre</h1>
                <h2 className='pb-7'>{ cyberware.nombre }</h2>
                <h1 className="pb-3 mb-2 border-b-2 border-yellow-400">Tipo</h1>
                <h2> {cyberware.tipo}</h2>
            </CardBody>
        </Card>
    )
}