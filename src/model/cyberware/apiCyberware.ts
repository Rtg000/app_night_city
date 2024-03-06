import { ICyberware } from "@/interfaces/ICyberware";
import { apiBD } from "../apiBD";

const apiCyberware = {
    
    listar: async (): Promise<ICyberware[]> => {
        const ruta = `${apiBD}/cyberware`;
        const cyberware = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return cyberware
    },

    detalle: async (id: ICyberware["id"]): Promise<ICyberware> => {
        const ruta = `${apiBD}/cyberware/${id}`;
        const cyberware = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return cyberware
    } 
}

export default apiCyberware