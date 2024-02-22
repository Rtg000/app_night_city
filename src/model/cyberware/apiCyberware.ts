import { ICyberware } from "@/interfaces/ICyberware";

const apiBD = "http://172.31.10.253:3001/api";
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