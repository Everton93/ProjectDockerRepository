import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";
import Usuario from "../typeorm/entities/Usuario";
import { compare, hash } from "bcrypt";


interface Irequest
{
    email : string;
    password : string;
}

interface IResponse
{
    user : Usuario;
}

class CreateSessionService
{

    public async execute ({email, password}: Irequest): Promise<Usuario>{
        const usersRepository = getCustomRepository(UsersRepository);

        const passwordHash = await hash(password,10);

        const user = await usersRepository.findByEmailAndPassword(email,password);

        if(!user) throw new AppError("email ou senha incorretos!!", 401);

        const confirmPassword = compare(passwordHash, user.password);

        if(!confirmPassword) throw new AppError("email ou senha incorretos!!", 401);


        return user;
    }
}

export default CreateSessionService;
