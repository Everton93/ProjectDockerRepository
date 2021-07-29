import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../infrastructure/typeorm/repositories/UsersRepository";
import Fornecedor from "../infrastructure/typeorm/entities/Usuario";


class ListUserService
{
    public async execute (): Promise<Fornecedor[]>{
        const usersRepository = getCustomRepository(UsersRepository);

        const usersList = await usersRepository.find();

        return usersList;
    }
}

export default ListUserService;
