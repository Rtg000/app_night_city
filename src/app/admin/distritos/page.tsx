import React from "react"
import { IDistrito } from "@/interfaces/IDistrito"
import apiDistritos from "@/model/distritos/apiDistritos"
import AdminDistritosTabla from "@/components/admin/distritos/AdminDistritosTabla"

const AdminDistritosPage = async () => {

    const distritos: IDistrito[] = await apiDistritos.listar()
    return(
        <>
            <AdminDistritosTabla distritos={distritos}/>
        </>
    )
}

export default AdminDistritosPage