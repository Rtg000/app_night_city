import { ILogin } from "./ILogin";
import { IUser } from "./IUser";

export interface IRespLogin {
    msg: string;
    status: number;
    user: IUser;
    token: string;
}