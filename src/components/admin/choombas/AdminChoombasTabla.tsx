'use client'
import React, { FC } from "react"
import { IChoomba } from "@/interfaces/IChoomba";
import { Button, useDisclosure } from "@nextui-org/react";
import { AdminChoombasModal } from "./AdminChoombasModal";

interface Props {
    choombas: IChoomba[];
}

export const AdminChoombasTabla:FC<Props> = ({choombas}) => {

    const { onOpen, } = useDisclosure();

    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gang
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <AdminChoombasModal/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        choombas.map((choomba) => (
                            <tr key={choomba.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">
                                    <img alt="Imagen Choomba" src={choomba.img} width={50} height={50} className="object-contain max-h-[140px] w-[140px]"/>
                                </td>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {choomba.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {choomba.edad}
                                </td>   
                                <td className="px-6 py-4">
                                    {choomba.gang?.nombre}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>                           
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>      
        </>
    );
}

export default AdminChoombasTabla