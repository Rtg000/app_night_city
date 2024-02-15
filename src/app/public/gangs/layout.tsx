import { Menu } from "@/components/commons/Navbar/Navbar";
import { IChildren } from "@/interfaces/IChildren";
import { ILink } from "@/interfaces/ILink";

export default function GangsLayout({children}: IChildren){
    return(
        <main>
            {children}
        </main>
    )
}
