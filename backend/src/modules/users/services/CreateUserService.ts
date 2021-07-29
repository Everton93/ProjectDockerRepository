import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../infrastructure/typeorm/repositories/UsersRepository";
import Usuario from "../infrastructure/typeorm/entities/Usuario";
import { hash } from "bcryptjs";


interface Irequest
{
    nome :string;
    email : string;
    password : string;
}

class CreateUsersService
{

    public async execute ({nome, email, password}: Irequest): Promise<Usuario>{
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findByEmail(email);

        if(user) throw new AppError("Esse Usuario ja consta no sistema !!");


        const usuario = await usersRepository.create({
            nome,
            email,
            password : await hash(password,8)
        });

        await usersRepository.save(usuario);

        return usuario;
    }
}

export default CreateUsersService;
