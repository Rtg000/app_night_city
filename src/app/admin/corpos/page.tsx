import React from "react"
import { ICorpo } from "@/interfaces/ICorpo"
import apiCorpos from "@/model/corpos/apiCorpos"
import AdminCorposTabla from "@/components/admin/corpos/AdminCorposTabla"

const AdminCorposPage = async () => {

    const corpos: ICorpo[] = await apiCorpos.listar()
    return(
        <>
            <AdminCorposTabla corpos={corpos}/>
        </>
    )
}

export default AdminCorposPage