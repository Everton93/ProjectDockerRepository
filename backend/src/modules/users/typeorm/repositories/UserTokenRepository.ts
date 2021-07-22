import { EntityRepository, Repository } from "typeorm";
import UserToken from '../entities/TokenUsuario';


@EntityRepository(UserToken)
export class UsersTokenRepository extends Repository<UserToken> {

    public async findByToken(token: string) : Promise<UserToken | undefined>
    {
            return await this.findOne({
                where: {
                token,
                },
                });
    }

    public async findById(id_token: string) : Promise<UserToken | undefined>
    {
            return await this.findOne({
                where: {
                    id_token,
                },
                });
    }

    public async generate(user_id : string) : Promise<UserToken | undefined>
    {
        const usertoken = await this.create({
            user_id,
        });

         await this.save(usertoken)

         return usertoken;
    }

}
