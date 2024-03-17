'use client'
import React, { FC } from "react"
import { IDistrito } from "@/interfaces/IDistrito";
import { AdminDistritosModal } from "./AdminDistritosModal";

interface Props {
    distritos: IDistrito[];
}

export const AdminDistritosTabla:FC<Props> = ({distritos}) => {
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
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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