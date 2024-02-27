export interface IUser{
    id: number;
    email: string
    username: string;
    password: string;
    isActive: boolean;
    roles: string[];
    logo: string; // ruta public/images/
    instagram: string;

}