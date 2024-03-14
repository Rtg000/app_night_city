import React from "react"
import { IChoomba } from "@/interfaces/IChoomba"
import apiChoombas from "@/model/choombas/apiChoombas"
import AdminChoombasTabla from "@/components/admin/choombas/AdminChoombasTabla"

const AdminChoombasPage = async () => {

    const choombas: IChoomba[] = await apiChoombas.listar()
    return(
        <>
            <AdminChoombasTabla choombas={choombas}/>
        </>
    )
}

export default AdminChoombasPage