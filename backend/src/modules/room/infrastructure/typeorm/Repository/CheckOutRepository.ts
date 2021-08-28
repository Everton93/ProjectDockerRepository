import ICheckOut from "@modules/room/Domain/Models/CheckOut/ICheckOut";
import ICreateCheckOut from "@modules/room/Domain/Models/CheckOut/ICreateCheckOut";
import ICheckOutRepository from "@modules/room/Domain/Repository/ICheckOutRepository";
import CheckOut from "@modules/room/infrastructure/typeorm/Entities/CheckOut";
import { getRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";

export default class CheckOutRepository 
implements Omit<ICheckOutRepository,"listAll" | "findById" | "findByRoom" | "delete" > 
{

    private readonly ormRepository : Repository<CheckOut>

    constructor()
    {
         this.ormRepository = getRepository(CheckOut);
    }

    public async create(data: ICreateCheckOut): Promise<ICheckOut>
    {
        const check = await this.ormRepository.create(data);

        return await this.ormRepository.save(check);
    }

    public async save(reserve: ICheckOut): Promise<ICheckOut>
    {
       return await this.ormRepository.save(reserve);
    }

}
