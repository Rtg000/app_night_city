import { IGang } from "@/interfaces/IGang";

const apiBD = "http://172.31.10.253:3001/api";
const apiGangs = {
    
    listar: async (): Promise<IGang[]> => {
        const ruta = `${apiBD}/gang`;
        const gangs = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return gangs
    },

    detalle: async (id: IGang["id"]): Promise<IGang> => {
        const ruta = `${apiBD}/gang/${id}`;
        const gang = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return gang
    } 
}

export default apiGangs