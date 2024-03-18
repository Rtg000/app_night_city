'use client'
import React, { FC, useState } from "react"
import { IGang } from "@/interfaces/IGang";
import { AdminGangsModal } from "./AdminGangsModal";
import { apiBD } from "@/model/apiBD";
import axios from "axios";
import { Button } from "@nextui-org/react";

interface Props {
    gangs: IGang[];
}

export const AdminGangsTabla:FC<Props> = ({gangs}) => {
    const [deleted, setDelete] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${apiBD}/gang/${id}`);
            setDelete(id);
            window.location.reload();
        }catch (error) {
            console.error('Error al borrar el gang:', error);
        }
    };

    const confirmDelete = (id: string) => {
        if (window.confirm('¿Desea borrar este gang?')) {
            handleDelete(id);
        }
    };
    
    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-24 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <AdminGangsModal/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        gangs.map((gang) => (
                            <tr key={gang.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">
                                    <img alt="Imagen Gang" src={gang.img} width={50} height={50} className="object-contain max-h-[140px] w-[140px]"/>
                                </td>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {gang.id}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {gang.nombre}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {gang.descripcion}
                                </th>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    <Button type="button" onClick={() => confirmDelete(gang.id)}>Borrar</Button>
                                </th>                           
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>      
        </>
    );
}

export default AdminGangsTabla