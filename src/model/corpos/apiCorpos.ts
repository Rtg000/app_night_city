import { ICorpo } from "@/interfaces/ICorpo";
import { apiBD } from "../apiBD";

const apiCorpos = {
    
    listar: async (): Promise<ICorpo[]> => {
        const ruta = `${apiBD}/corpo`;
        const corpos = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return corpos
    },

    detalle: async (id: ICorpo["id"]): Promise<ICorpo> => {
        const ruta = `${apiBD}/corpo/${id}`;
        const corpo = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return corpo
    } 
}

export default apiCorpos