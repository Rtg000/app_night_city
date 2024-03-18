'use client'
import React, { FC, useState } from "react"
import { IDistrito } from "@/interfaces/IDistrito";
import { AdminDistritosModal } from "./AdminDistritosModal";
import { apiBD } from "@/model/apiBD";
import axios from "axios";
import { Button } from "@nextui-org/react";

interface Props {
    distritos: IDistrito[];
}

export const AdminDistritosTabla:FC<Props> = ({distritos}) => {
    const [deleted, setDelete] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${apiBD}/distrito/${id}`);
            setDelete(id);
            window.location.reload();
        }catch (error) {
            console.error('Error al borrar el distrito:', error);
        }
    };

    const confirmDelete = (id: string) => {
        if (window.confirm('¿Desea borrar este distrito?')) {
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
                                Subdistritos
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <AdminDistritosModal/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        distritos.map((distrito) => (
                            <tr key={distrito.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">
                                    <img alt="Imagen Distrito" src={distrito.img} width={50} height={50} className="object-contain max-h-[140px] w-[140px]"/>
                                </td>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {distrito.id}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {distrito.nombre}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <p>{distrito.subdistrito[0]}</p>
                                    <p>{distrito.subdistrito[1]}</p>
                                    <p>{distrito.subdistrito[2]}</p>
                                </th>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    <Button type="button" onClick={() => confirmDelete(distrito.id)}>Borrar</Button>
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

export default AdminDistritosTabla