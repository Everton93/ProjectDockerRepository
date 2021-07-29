import { EntityRepository, Repository } from "typeorm";
import Users from '../entities/Usuario';


@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {

    public async findByEmail(email: string) : Promise<Users | undefined>
    {
            return await this.findOne({
                where: {
                email,
                },
                });
    }

    public async findByEmailAndPassword(email: string, password : string) : Promise<Users | undefined>
    {
            return await this.findOne({
                where: {
                    email,
                    password
                },
                });
    }

    public async findById(id_usuario: string) : Promise<Users | undefined>
    {
            return await this.findOne({
                where: {
                    id_usuario,
                },
                });
    }

}
