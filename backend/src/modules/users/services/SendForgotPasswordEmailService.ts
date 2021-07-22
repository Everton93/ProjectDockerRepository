import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import {UsersRepository} from "../typeorm/repositories/UsersRepository";
import { UsersTokenRepository } from "../typeorm/repositories/UserTokenRepository";


interface Irequest
{
    email : string;
}


class SendForgotPasswordEmailService
{

     public async execute ({email}: Irequest): Promise<void>{
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokenRepository  = getCustomRepository(UsersTokenRepository);

        const user = await usersRepository.findByEmail(email);

        if (!user) throw new AppError('Usuario nao encontrado');

        const token = await userTokenRepository.generate(user.id_usuario);

    }
}

export default SendForgotPasswordEmailService;
