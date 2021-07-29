import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../infrastructure/typeorm/repositories/UsersRepository";
import Usuario from "../infrastructure/typeorm/entities/Usuario";


interface Irequest
{
    email : string;
}


class ShowUserServiceByemail
{

    public async executeforsSearch ({email}: Irequest): Promise<Usuario | undefined>{
        const usersRepository = getCustomRepository(UsersRepository);

        const usuario = await usersRepository.findByEmail(email);

        if(!usuario)  throw new AppError('Usuario nao encontrado !!');

        return usuario;
    }

}

export default ShowUserServiceByemail;
