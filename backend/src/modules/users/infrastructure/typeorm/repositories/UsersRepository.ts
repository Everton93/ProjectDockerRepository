import ICreateUser from "@modules/users/Domain/Models/ICreateUser";
import IUser from "@modules/users/Domain/Models/IUser";
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import {getRepository, Repository } from "typeorm";
import Users from "../entities/Usuario";


export class UsersRepository implements IUserRepository {

    private ormRepository : Repository<Users>

    constructor(){
         this.ormRepository = getRepository(Users);
    }


    public async create({nome, email, password}: ICreateUser): Promise<IUser>
    {
        const user = await this.ormRepository.create({nome, email, password});

        return this.ormRepository.save(user);
    }

    public async save(product: IUser): Promise<IUser>
    {
        return await this.ormRepository.save(product);
    }

    public async findAll(): Promise<Array<IUser>>
    {
        return await this.ormRepository.find();
    }

    public async findByEmail(email: string) : Promise<Users | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                email,
                },
                });
    }

    public async findById(id_usuario: string) : Promise<Users | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                    id_usuario,
                },
                });
    }

}
