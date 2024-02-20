export interface IFixer {
    id: string;
    nombre: string;
    edad: number | null;
    distrito?: {
        id: string;
        nombre: string;
    }
}