import { IChildren } from "@/interfaces/IChildren";

export default function AdminLayout({children}: IChildren) {
    return (
        <>
            <header>
                <h1>Panel de Administración</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    );
  }