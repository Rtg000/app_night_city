import React from "react"
import { IGang } from "@/interfaces/IGang"
import apiGangs from "@/model/gangs/apiGangs"
import AdminGangsTabla from "@/components/admin/gangs/AdminGangsTabla"

const AdminGangsPage = async () => {

    const gangs: IGang[] = await apiGangs.listar()
    return(
        <>
            <AdminGangsTabla gangs={gangs}/>
        </>
    )
}

export default AdminGangsPage