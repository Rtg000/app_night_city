import { ILogin } from '@/interfaces/ILogin';
import { IRespLogin } from '@/interfaces/IRespLogin';
import axios from 'axios';
import { apiBD } from '../apiBD';

const apiAuth = {

    login: async (login: ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`,login)
        return data
    },

    // register: async (register: IRegister): Promise<IRespRegister> => {
    //     const ruta = `${apiBD}/auth/register`;
    //     const {data} = await axios.post(`${ruta}`,register)
    //     return data
    // }

}

export default apiAuth