import AppError from "@shared/errors/error";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import ICreateUser from "@modules/users/Domain/Models/ICreateUser";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import IUser from "@modules/users/Domain/Models/IUser";
@injectable()
export default class CreateUsersService
{

    constructor(
        @inject('UsersRepository')
        private usersRepository : IUserRepository
         ){}

    public async executeCreateUser ({nome, email, password}: ICreateUser): Promise<IUser>{

        const user = await this.usersRepository.findByEmail(email);

        if(user) throw new AppError("Esse Usuario ja consta no sistema !!");

        const usuario = await this.usersRepository.create({
            nome,
            email,
            password : await hash(password,8)
        });

        await this.usersRepository.save(usuario);

        return usuario;
    }
}

