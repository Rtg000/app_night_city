import { IChildren } from "@/interfaces/IChildren";

export default function AuthLayout({children}: IChildren){

    return(
        <>
            <header className="bg-yellow-400">
                <h2 className="text-black">Zona de autenticación</h2>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
