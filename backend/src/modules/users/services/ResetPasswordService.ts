import AppError from "@shared/errors/error";
import { isAfter, addHours } from "date-fns";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import IUserTokenRepository from "@modules/users/Domain/Repository/IUserTokenRepository";
import IResetPassword from "@modules/users/Domain/Models/IResetPassword";

@injectable()
export default class ResetPasswordService {

    constructor(
        @inject('UsersRepository')
        private userRepository : IUserRepository,

        private userTokenRepository : IUserTokenRepository
        ){}

    public async executeResetPassword({ token, password }: IResetPassword): Promise<void> {

        const userToken = await this.userTokenRepository.findByToken(token);

        if (!userToken) throw new AppError("Usuario nao encontrado");

        const user = await this.userRepository.findById(userToken.usuario_id);

        if (!user) throw new AppError("Usuario nao encontrado");

        const compareDate = addHours(userToken.data_de_criacao, 2);

        if (isAfter(Date.now(), compareDate))
            throw new AppError("Token expirado !!");

        user.password = await hash(password, 8);

        await this.userRepository.save(user);
    }
}

