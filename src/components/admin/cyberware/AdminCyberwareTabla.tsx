'use client'
import React, { FC } from "react"
import { ICyberware } from "@/interfaces/ICyberware";
import { AdminCyberwareModal } from "./AdminCyberwareModal";

interface Props {
    cyberware: ICyberware[];
}

export const AdminCyberwareTabla:FC<Props> = ({cyberware}) => {
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
                                Tipo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <AdminCyberwareModal/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        cyberware.map((cyberware) => (
                            <tr key={cyberware.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">
                                    <img alt="Imagen Cyberware" src={cyberware.img} width={50} height={50} className="object-contain max-h-[140px] w-[140px]"/>
                                </td>   
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cyberware.id}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cyberware.nombre}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cyberware.tipo}
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

export default AdminCyberwareTabla