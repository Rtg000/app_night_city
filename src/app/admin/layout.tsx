import { Aside } from "@/components/admin/Aside";
import { IChildren } from "@/interfaces/IChildren";

export default function AdminLayout({children}: IChildren) {
    return (
        <div className="w-full flex flex-row flex-wrap">
            <Aside/>
            <div className="w-full p-4 sm:ml-64">
                {children}
            </div>
        </div>
    );
}