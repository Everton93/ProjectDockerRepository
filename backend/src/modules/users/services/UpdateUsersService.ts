import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../infrastructure/typeorm/repositories/UsersRepository";
import Usuario from "../infrastructure/typeorm/entities/Usuario";
import {hash , compare} from "bcryptjs"


interface Irequest
{
    id_usuario : string,
    nome :string;
    email : string;
    password?: string;
    old_password? : string;
}

class UpdateUsersService
{

    public async execute ({ id_usuario, nome, email, password, old_password}: Irequest): Promise<Usuario>{

        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findById(id_usuario);

        if(!user) throw new AppError("Usuario não encontrado !!");

        const userUpdateEmail = await usersRepository.findByEmail(email);

        if (userUpdateEmail && userUpdateEmail.id_usuario !== id_usuario)
            throw new AppError("Ja tem um usuario com esse email cadastrado !!");

        if (password && !old_password) throw new AppError("Senha antiga Requerida !!");

        if (password && old_password){
            const compareOldPassword = await compare(old_password, user.password);

            if (!compareOldPassword) throw new AppError("Senha antiga nao corresponde !!");

            user.password = await hash(password,8);
        }

        user.nome = nome;
        user.email = email;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUsersService;
