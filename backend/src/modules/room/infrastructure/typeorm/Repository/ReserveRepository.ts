import ICreateReserve from "@modules/room/Domain/Models/Reserve/ICreateReserve";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import ReservaQuarto from "../Entities/ReservaQuarto";
import { getRepository, Repository } from "typeorm";

export default class ReserveRepository implements IReserveRepository
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

    public async findByid(id_reserva: string): Promise<IReserve | undefined>
    {
        return await this.ormRepository.findOne(
            {
                where: {
                    id_reserva
                },
            });
    }

    public async findByGuest(hospede_id: string): Promise<IReserve | undefined>
    {
        return await this.ormRepository.findOne(
            {
                where: {
                    hospede_id
                },
            });
    }

    public async findByRoom(quarto_id: string): Promise<IReserve | undefined> {
        return await this.ormRepository.findOne(
            {
                where: {
                    quarto_id,
                },
            });
    }

    public async delete(reserve: IReserve): Promise<void>
    {
         await this.ormRepository.delete(reserve);
    }

    public async save(reserve: IReserve): Promise<IReserve> {
        return await this.ormRepository.save(reserve);
    }
}
