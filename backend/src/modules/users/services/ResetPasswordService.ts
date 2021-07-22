import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import {UsersRepository} from "../typeorm/repositories/UsersRepository";
import { UsersTokenRepository } from "../typeorm/repositories/UserTokenRepository";
import {isAfter, addHours} from 'date-fns'
import {hash} from 'bcryptjs'

interface Irequest
{
    token : string;
    password : string;
}


class ResetPasswordService
{

     public async execute ({token, password}: Irequest): Promise<void>{
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokenRepository  = getCustomRepository(UsersTokenRepository);

        const userToken = await userTokenRepository.findByToken(token);

        if (!userToken) throw new AppError('Usuario nao encontrado');

        const user = await usersRepository.findById(userToken.user_id);

        if (!user) throw new AppError('Usuario nao encontrado');

       // const token = await userTokenRepository.generate(user.id_usuario);

       const compareDate = addHours(userToken.data_de_criacao, 2);

       if (isAfter(Date.now(), compareDate)) throw new AppError('Token expirado !!');

       user.password = await hash(password, 8);


    }
}

export default ResetPasswordService;
