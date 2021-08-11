import { inject, injectable } from "tsyringe";
import IUser from "@modules/users/Domain/Models/IUser";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";


@injectable()
export default class ListUserService
{

    constructor(
        @inject('UsersRepository')
        private usersRepository : IUserRepository
         ){}

    public async executeListUsers (): Promise<Array<IUser> | undefined>
    {
        return await this.usersRepository.findAll();;
    }
}
