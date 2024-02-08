import { Menu } from "@/components/Navbar";
import { IChildren } from "@/interfaces/IChildren";
import { ILink } from "@/interfaces/ILink";

export default function PublicLayout({children}: IChildren){
    const links:ILink[] = [
        {name: "Cyberware", href: "/public/cyberware"},
        {name: "Choombas", href: "/public/choombas"},
        {name: "Distritos", href: "/public/distritos"},
        {name: "Fixers", href: "/public/fixers"},
        {name: "Gangs", href: "/public/gangs"},
        {name: "Corpos", href: "/public/corpos"}
      ];

    return(
        <>
            <header>
                <h1>Header del Frontend</h1>
                <Menu links = {links}/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
