import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";
import Usuario from "../typeorm/entities/Usuario";


interface Irequest
{
    id_usuario : string;
}


class ShowUserServiceById
{

    public async executeforsSearch ({id_usuario}: Irequest): Promise<Usuario | undefined>{
        const usersRepository = getCustomRepository(UsersRepository);

        const usuario = await usersRepository.findById(id_usuario);

        if(!usuario)  throw new AppError('Usuario nao encontrado !!');

        return usuario;
    }

}

export default ShowUserServiceById;
