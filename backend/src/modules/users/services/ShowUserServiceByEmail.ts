import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import IUser from "@modules/users/Domain/Models/IUser";
import IShowUserByEmail from "@modules/users/Domain/Models/IShowUserByEmail";


@injectable()
export default class ShowUserServiceByemail
{

    constructor(
        @inject('UsersRepository')
        private usersRepository : IUserRepository
         ){}

    public async executeSearchByEmail ({email}: IShowUserByEmail): Promise<IUser | undefined>{

        const usuario = await this.usersRepository.findByEmail(email);

        if(!usuario)  throw new AppError('Usuario nao encontrado !!');

        return usuario;
    }
}

