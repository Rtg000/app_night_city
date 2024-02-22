export interface IChoomba {
    id: string;
    nombre: string;
    edad: number;
    img: string;
    gang?: {
        id: string;
        nombre: string;
    };
}