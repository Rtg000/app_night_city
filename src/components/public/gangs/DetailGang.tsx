'use client'
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';
import { IGang } from '@/interfaces/IGang';
// import Image from 'next/image'


interface Props {
    gang: IGang
}

export const DetailGang:FC<Props> = ({ gang }) => {
    
    return(
        <Card className="py-4 flex flex-row flex-nowrap border-2 border-yellow-400">
            <CardHeader className="pb-0 pt-2 p-2 basis-1/4 flex justify-center">
                <Image 
                    alt="Card background"
                    // className="object-cover "
                    src={gang.img}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3">
                <h1 className="pb-3 mb-2 border-b-2 border-yellow-400">Nombre</h1>
                <h2 className='pb-7'>{ gang.nombre }</h2>
            </CardBody>
        </Card>
    )
}