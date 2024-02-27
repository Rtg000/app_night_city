import { IChildren } from "@/interfaces/IChildren";

export default function AuthLayout({children}: IChildren){

    return(
        <>
            <header className="bg-cyan-500">
                <h2>Zona de autenticación</h2>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
