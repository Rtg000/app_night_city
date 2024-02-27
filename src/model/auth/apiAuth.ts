import { ILogin } from '@/interfaces/ILogin';
import { IRespLogin } from '@/interfaces/IRespLogin';
import axios from 'axios';

const apiBD = "http://172.31.10.253:3001/api";
const apiAuth = {

    login: async (login: ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`,login)
        return data
    }

}

export default apiAuth