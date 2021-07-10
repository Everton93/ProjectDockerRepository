import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";
import Usuario from "../typeorm/entities/Usuario";


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

        const user = await usersRepository.findByEmail(email);

        if(!user) throw new AppError("Usuario não encontrado !!");

        user.nome = nome;
        user.email = email;
        user.password = password;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUsersService;
