import ITokenUser from "@modules/users/Domain/Models/ITokenUser";
import IUserTokenRepository from "@modules/users/Domain/Repository/IUserTokenRepository";
import { getRepository, Repository } from "typeorm";
import TokenUsuario from "@modules/users/infrastructure/typeorm/entities/TokenUsuario";

export class UsersTokenRepository  implements IUserTokenRepository
{

    private ormRepository : Repository<TokenUsuario>

    constructor(){
         this.ormRepository = getRepository(TokenUsuario);
    }

    public async findByToken(token: string) : Promise<ITokenUser | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                token,
                },
                });
    }

    public async findById(id_token : string) : Promise<ITokenUser | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                    id_token,
                },
                });
    }

    public async generateToken (usuario_id : string) : Promise<ITokenUser>
    {
        const usertoken = await this.ormRepository.create({
           usuario_id ,
        },);

         await this.ormRepository.save(usertoken);

         return usertoken;
    }

    public async saveToken(userToken: ITokenUser): Promise<ITokenUser>
    {
        return this.ormRepository.save(userToken);
    }

}
