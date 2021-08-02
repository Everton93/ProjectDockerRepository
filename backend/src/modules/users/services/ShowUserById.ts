import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import IUser from "@modules/users/Domain/Models/IUser";
import IShowUserById from "@modules/users/Domain/Models/IShowUserById";

@injectable()
export default class ShowUserServiceById
{
    constructor(
        @inject('UsersRepository')
        private usersRepository : IUserRepository
         ){}

    public async executeSearchById ({id_usuario}: IShowUserById): Promise<IUser | undefined>{

        const usuario = await this.usersRepository.findById(id_usuario);

        if(!usuario)  throw new AppError('Usuario nao encontrado !!');

        return usuario;
    }
}
