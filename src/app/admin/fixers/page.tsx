import React from "react"
import { IFixer } from "@/interfaces/IFixer"
import apiFixers from "@/model/fixers/apiFixers"
import AdminFixersTabla from "@/components/admin/fixers/AdminFixersTabla"

const AdminFixersPage = async () => {

    const fixers: IFixer[] = await apiFixers.listar()
    return(
        <>
            <AdminFixersTabla fixers={fixers}/>
        </>
    )
}

export default AdminFixersPage