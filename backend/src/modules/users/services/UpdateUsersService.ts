import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";
import Usuario from "../typeorm/entities/Usuario";
import {hash} from "bcryptjs"


interface Irequest
{
    id_usuario : string,
    nome :string;
    email : string;
    password : string;
}


class UpdateUsersService
{

    public async execute ({ id_usuario ,nome, email, password}: Irequest): Promise<Usuario>{
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findById(id_usuario);

        if(!user) throw new AppError("Usuario não encontrado !!");

        user.nome = nome;
        user.email = email;
        user.password = await hash(password,8);

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUsersService;
