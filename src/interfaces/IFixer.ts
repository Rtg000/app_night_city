export interface IFixer {
    id: string;
    nombre: string;
    edad: number | null;
    img: string;
    distrito?: {
        id: string;
        nombre: string;
    }
}