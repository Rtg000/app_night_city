import { IChildren } from "@/interfaces/IChildren";

export default function LoginLayout({children}: IChildren) {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
}