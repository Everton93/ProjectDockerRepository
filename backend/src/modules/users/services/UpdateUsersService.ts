import AppError from "@shared/errors/error";
import {hash , compare} from "bcryptjs"
import { inject, injectable } from "tsyringe";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import IUser from "@modules/users/Domain/Models/IUser";
import IUpdateUser from "@modules/users/Domain/Models/IUpdateUser";

@injectable()
export default class UpdateUsersService
{

    constructor(
        @inject('UsersRepository')
        private usersRepository : IUserRepository
         ){}

    public async executeUpdateUser ({
        id_usuario,
        nome,
        email,
        password,
        old_password
        }: IUpdateUser): Promise<IUser>{

        const user = await this.usersRepository.findById(id_usuario);

        if(!user) throw new AppError("Usuario não encontrado !!");

        await this.validateEmail(email, id_usuario);

        await this.validatePassword(password, old_password, user);

        user.nome = nome;
        user.email = email;

        return await this.usersRepository.save(user);
    }

    private async validateEmail (email : string, id_usuario : string) : Promise <void>
    {
        const userUpdateEmail = await this.usersRepository.findByEmail(email);

        if (userUpdateEmail && userUpdateEmail.id_usuario !== id_usuario)
            throw new AppError("Ja tem um usuario com esse email cadastrado !!");

    }

    private async validatePassword (password : string | undefined,
                                    old_password : string | undefined,
                                    user: IUser) : Promise <void>
    {
        if (password && !old_password) throw new AppError("Senha antiga Requerida !!");

        if (password && old_password){
            const compareOldPassword = await compare(old_password, user.password);

            if (!compareOldPassword) throw new AppError("Senha antiga nao corresponde !!");

            user.password = await hash(password,8);
        }
    }

}

