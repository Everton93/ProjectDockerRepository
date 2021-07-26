import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import {UsersRepository} from "../typeorm/repositories/UsersRepository";
import { UsersTokenRepository } from "../typeorm/repositories/UserTokenRepository";
import EtherealMail from "@config/mail/EtherealMail";
import path from "path";

interface Irequest
{
    email : string;
}

class SendForgotPasswordEmailService
{

     public async execute ({email}: Irequest): Promise<void>{
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokenRepository  = getCustomRepository(UsersTokenRepository);

        const forgotPassworFile = path.resolve(__dirname,'..','Views','forgot_password.hbs');

        const user = await usersRepository.findByEmail(email);

        if (!user) throw new AppError('Usuario nao encontrado');

        const {token} = await userTokenRepository.generate(user.id_usuario);

        await EtherealMail.sendEmail(
            {
                to : {
                    name :user.nome,
                    email : user.email
                },
                subject : '[API TEST ] Recuperação de senha !!',
                templateData: {
                    file:  forgotPassworFile,
                    variables : {
                        name : user.nome,
                        link : `http://localhost:3333/reset?token=${token}`
                    },
                },
            });

    }
}

export default SendForgotPasswordEmailService;
