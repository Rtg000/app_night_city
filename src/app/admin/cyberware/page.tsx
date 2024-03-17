import React from "react"
import { ICyberware } from "@/interfaces/ICyberware"
import apiCyberware from "@/model/cyberware/apiCyberware"
import AdminCyberwareTabla from "@/components/admin/cyberware/AdminCyberwareTabla"

const AdminCyberwarePage = async () => {

    const cyberware: ICyberware[] = await apiCyberware.listar()
    return(
        <>
            <AdminCyberwareTabla cyberware={cyberware}/>
        </>
    )
}

export default AdminCyberwarePage