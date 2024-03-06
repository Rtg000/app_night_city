import { IDistrito } from "@/interfaces/IDistrito";
import { apiBD } from "../apiBD";

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