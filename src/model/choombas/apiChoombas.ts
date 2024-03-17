import { IChoomba } from "@/interfaces/IChoomba";
import { apiBD } from "../apiBD";

const apiChoombas = {
    
    listar: async (): Promise<IChoomba[]> => {
        const ruta = `${apiBD}/choomba`;
        const choombas = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return choombas
    },

    detalle: async (id: IChoomba["id"]): Promise<IChoomba> => {
        const ruta = `${apiBD}/choomba/${id}`;
        const choomba = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return choomba
    },

    create: async (id: IChoomba["id"]): Promise<IChoomba> => {
        const ruta = `${apiBD}/choomba`;
        const choomba = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return choomba
    },
}

export default apiChoombas