import { IDistrito } from "@/interfaces/IDistrito";

const apiBD = "http://172.31.10.253:3001/api";
const apiDistritos = {
    
    listar: async (): Promise<IDistrito[]> => {
        const ruta = `${apiBD}/distrito`;
        const distritos = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return distritos
    },

    detalle: async (id: IDistrito["id"]): Promise<IDistrito> => {
        const ruta = `${apiBD}/distrito/${id}`;
        const distrito = await fetch(`${ruta}`,{cache: "no-store"})
            .then((res) => res.json())
        return distrito
    } 
}

export default apiDistritos