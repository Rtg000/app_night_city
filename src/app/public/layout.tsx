import { Menu } from "@/components/commons/Navbar/Navbar";
import { IChildren } from "@/interfaces/IChildren";
import { ILink } from "@/interfaces/ILink";

export default function PublicLayout({children}: IChildren){
    const links:ILink[] = [
        {name: "CYBERWARE", href: "/public/cyberware"},
        {name: "CHOOMBAS", href: "/public/choombas"},
        {name: "DISTRITOS", href: "/public/distritos"},
        {name: "FIXERS", href: "/public/fixers"},
        {name: "GANGS", href: "/public/gangs"},
        {name: "CORPOS", href: "/public/corpos"},
        // {name: "TEST", href: "/public/test"}
      ];

    return(
        <>
            <header>
                <Menu links = {links}/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
