import { IChildren } from "@/interfaces/IChildren";

export default function FixerLayout({children}: IChildren){
    return(
        <main>
            {children}
        </main>
    )
}