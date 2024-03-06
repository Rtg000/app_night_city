import { ILogin } from '@/interfaces/ILogin';
import { IRespLogin } from '@/interfaces/IRespLogin';
import axios from 'axios';
import { apiBD } from '../apiBD';

const apiAuth = {

    login: async (login: ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`,{...login})
        return data
    }

}

export default apiAuth