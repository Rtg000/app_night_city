import { IChildren } from "@/interfaces/IChildren";

export default function CyberwLayout({children}: IChildren){
    return(
        <main>
            {children}
        </main>
    )
}