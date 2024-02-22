import { IChildren } from "@/interfaces/IChildren";

export default function CorpoLayout({children}: IChildren){
    return(
        <main>
            {children}
        </main>
    )
}
