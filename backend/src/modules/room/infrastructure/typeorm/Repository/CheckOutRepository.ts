import ICheckOut from "@modules/room/Domain/Models/CheckOut/ICheckOut";
import ICreateCheckOut from "@modules/room/Domain/Models/CheckOut/ICreateCheckOut";
import ICheckOutRepository from "@modules/room/Domain/Repository/ICheckOutRepository";
import CheckOut from "@modules/room/infrastructure/typeorm/Entities/CheckOut";
import { getRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";

export default class CheckOutRepository implements ICheckOutRepository
{

    private readonly ormRepository : Repository<CheckOut>

    constructor()
    {
         this.ormRepository = getRepository(CheckOut);
    }

    public async listAll(): Promise<ICheckOut[]>
    {
        return await this.ormRepository.find();
    }


    public async create(data: ICreateCheckOut): Promise<ICheckOut>
    {
        const check = await this.ormRepository.create(data);

        return await this.ormRepository.save(check);
    }

    public async findById(id: string): Promise<ICheckOut | undefined>
    {
        return await this.ormRepository.findOne(
            {
                where: {
                    id_checkout: id,
                },
            });
    }

    public async findByRoom(id: string): Promise<ICheckOut | undefined>
    {
        return await this.ormRepository.findOne(
            {
                where: {
                    quarto_id : id,
                },
            });
    }

    public async save(reserve: ICheckOut): Promise<ICheckOut>
    {
       return await this.ormRepository.save(reserve);
    }

    public async delete(data: ICheckOut): Promise<void>
    {
        await this.ormRepository.delete(data);
    }
}
