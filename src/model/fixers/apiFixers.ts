import { IFixer } from "@/interfaces/IFixer";

const apiBD = "http://172.31.10.253:3001/api";
const apiFixers = {
    
    listar: async (): Promise<IFixer[]> => {
        const ruta = `${apiBD}/fixer`;
        const fixers = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return fixers
    },

    detalle: async (id: IFixer["id"]): Promise<IFixer> => {
        const ruta = `${apiBD}/fixer/${id}`;
        const fixer = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return fixer
    } 
}

export default apiFixers