import ICreateUser from "../Models/ICreateUser";
import IUser from "../Models/IUser";

export default interface IUserRepository
{
    findAll(): Promise<IUser[]| undefined>;
    findById(id_usuario: string): Promise<IUser | undefined>;
    findByEmail(nome: string): Promise<IUser | undefined>;
    create(data: ICreateUser): Promise<IUser>;
    save(user: IUser): Promise<IUser>;
}
