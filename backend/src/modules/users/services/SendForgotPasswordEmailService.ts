import AppError from "@shared/errors/error";
import EtherealMail from "@config/mail/EtherealMail";
import path from "path";
import { inject, injectable } from "tsyringe";
import ISendForgotPassword from "@modules/users/Domain/Models/ISendForgotPassord";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import IUserTokenRepository from "@modules/users/Domain/Repository/IUserTokenRepository";
@injectable()
export default class SendForgotPasswordEmailService
{

    constructor(
        @inject('UsersRepository')
        private userRepository : IUserRepository,

        private userTokenRepository : IUserTokenRepository
        ){}

     public async executeSendForgot ({email}: ISendForgotPassword): Promise<void>
     {
        const forgotPassworFile = path.resolve(__dirname,'..','Views','forgot_password.hbs');

        const user = await this.userRepository.findByEmail(email);

        if (!user) throw new AppError('Usuario nao encontrado');

        const {token} = await this.userTokenRepository.generateToken(user.id_usuario);

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
                        link : `${process.env.APP_WEB_URL}/reset?token=${token}`
                    },
                },
            });

    }
}

