import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";
import Usuario from "../typeorm/entities/Usuario";
import authConfig from '@config/auth'
import { compare, hash } from "bcryptjs";
import {sign} from "jsonwebtoken"
import { boolean } from "joi";

interface Irequest
{
    email : string;
    password : string;
}

interface IResponse
{
    user : Usuario;
    token: string;
}

class CreateSessionService
{

     public async execute ({email, password}: Irequest): Promise<IResponse>{
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findByEmail(email);

        if(!user) throw new AppError("email ou senha incorretos!!", 401);

        const confirmPassword = await compare(password, user.password);

        if(!confirmPassword) throw new AppError("email ou senha incorretos!!", 401);

        const token = await sign({},authConfig.jwt.secret,{
            subject : user.id_usuario,
            expiresIn : authConfig.jwt.expirresIn
        });

        return {user, token };
    }
}

export default CreateSessionService;
