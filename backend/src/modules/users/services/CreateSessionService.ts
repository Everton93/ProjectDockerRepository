import AppError from "@shared/errors/error";
import authConfig from '@config/auth'
import { compare, hash } from "bcryptjs";
import {sign} from "jsonwebtoken"
import { inject, injectable } from "tsyringe";
import ICreateSession from "@modules/users/Domain/Models/ICreateSession";
import ISession from "@modules/users/Domain/Models/ISession";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";

@injectable()
export default class CreateSessionService
{

    constructor(
        @inject('UsersRepository')
        private usersRepository : IUserRepository
         ){}

     public async executeSession ({email, password}: ICreateSession): Promise<ISession>{

        const user = await this.usersRepository.findByEmail(email);

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

