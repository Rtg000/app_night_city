import { IChoomba } from "./IChoomba";

export interface IRespLogin {
    msg: string;
    status: number;
    user: IChoomba;
    token: string;
}