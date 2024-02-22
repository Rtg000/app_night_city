import { ICorpo } from "@/interfaces/ICorpo";

const apiBD = "http://172.31.10.253:3001/api";
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