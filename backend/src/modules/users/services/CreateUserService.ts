import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";
import Usuario from "../typeorm/entities/Usuario";
import { hash } from "bcrypt";


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

        const passwordHash = await hash(password,10);

        const usuario = await usersRepository.create({
            nome,
            email,
            password : passwordHash
        });

        await usersRepository.save(usuario);

        return usuario;
    }
}

export default CreateUsersService;
