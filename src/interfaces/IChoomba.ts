export interface IChoomba {
    id: string;
    nombre: string;
    edad: number;
    gang?: {
        id: string;
        nombre: string;
    };
}