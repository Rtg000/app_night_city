'use client'
import React, { FC, useState } from "react"
import { ICorpo } from "@/interfaces/ICorpo";
import { AdminCorposModal } from "./AdminCorposModal";
import { apiBD } from "@/model/apiBD";
import { Button } from "@nextui-org/react";
import axios from "axios";

interface Props {
    corpos: ICorpo[];
}

export const AdminCorposTabla:FC<Props> = ({corpos}) => {
    const [deleted, setDelete] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${apiBD}/corpo/${id}`);
            setDelete(id);
            window.location.reload();
        }catch (error) {
            console.error('Error al borrar el corpo:', error);
        }
    };

    const confirmDelete = (id: string) => {
        if (window.confirm('¿Desea borrar este corpo?')) {
            handleDelete(id);
        }
    };
    
    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <AdminCorposModal/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        corpos.map((corpo) => (
                            <tr key={corpo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img alt="Imagen Corpo" src={corpo.img} width={50} height={50} className="object-contain max-h-[140px] w-[140px]"/>
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {corpo.id}
                                </th>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {corpo.nombre}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    <Button type="button" onClick={() => confirmDelete(corpo.id)}>Borrar</Button>
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

export default AdminCorposTabla