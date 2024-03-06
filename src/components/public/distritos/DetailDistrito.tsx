'use client'
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';
import { IDistrito } from '@/interfaces/IDistrito';
// import Image from 'next/image'


interface Props {
    distrito: IDistrito
}

export const DetailDistrito:FC<Props> = ({ distrito }) => {
    
    return(
        <Card className="py-4 flex flex-row flex-nowrap border-2 border-yellow-400">
            <CardHeader className="pb-0 pt-2 p-2 basis-1/4 flex justify-center">
                <Image 
                    alt="Card background"
                    // className="object-cover "
                    src={distrito.img}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3">
                <h1 className="pb-3 mb-2 border-b-2 border-yellow-400">Nombre</h1>
                <h2 className='pb-7'>{ distrito.nombre }</h2>
                <h1 className="pb-3 mb-2 border-b-2 border-yellow-400">Subdistritos</h1>
                <h2 className='pb-3'>{ distrito.subdistrito[0] }</h2>
                <h2 className='pb-3'>{ distrito.subdistrito[1] }</h2>
                <h2 className='pb-3'>{ distrito.subdistrito[2] }</h2>
            </CardBody>
        </Card>
    )
}