import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import ReservaQuarto from "../Entities/ReservaQuarto";
import { getRepository, Repository } from "typeorm";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import ICreateReserve from "@modules/room/Domain/Models/Reserve/ICreateReserve";

export default class ReserveRepository implements 
Omit<IReserveRepository,"delete" >
{

    private readonly ormRepository : Repository<ReservaQuarto>

    constructor(){
         this.ormRepository = getRepository(ReservaQuarto);
    }

    public async listAll(): Promise<IReserve[]>
    {
        return await this.ormRepository.find();
    }

    public async create(data: ICreateReserve): Promise<IReserve>
    {
        const reserveCreate = await this.ormRepository.create(data);

         return await this.ormRepository.save(reserveCreate);
    }

    public async findById(id: string): Promise<IReserve | undefined>
    {
        return await this.ormRepository.findOne(
            {
                where: {
                    id_reserva : id
                },
            });
    }

    public async findByGuest(id: string): Promise<IReserve | undefined>
    {
        return await this.ormRepository.findOne(
            {
                where: {
                    hospede_id: id,
                },
            });
    }

    public async save(reserve: IReserve): Promise<IReserve> {
        return await this.ormRepository.save(reserve);
    }
}
