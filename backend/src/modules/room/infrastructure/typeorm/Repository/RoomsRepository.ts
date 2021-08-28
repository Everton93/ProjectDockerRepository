import ICreateRoom from "@modules/room/Domain/Models/Room/ICreateRoom";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";
import { getRepository, Repository } from "typeorm";

export default class RoomsRepository implements Omit<IRoomsRepository,"delete" >

{

    private readonly ormRepository : Repository<IRoom>

    constructor(){
         this.ormRepository = getRepository("Quarto");
    }

    public async listAll(): Promise<IRoom[]>
    {
        return await this.ormRepository.find();
    }

    public async create(data: ICreateRoom): Promise<IRoom>
    {
        const room = await this.ormRepository.create(data);

        return await this.ormRepository.save(room);
    }

    public async findById(id: string): Promise<IRoom | undefined> {
        return await this.ormRepository.findOne(
            {
                where:{
                    id_quarto : id,
                }
            });
    }

    public async findByNumber(number_room : string): Promise<IRoom | undefined>
    {
        return this.ormRepository.findOne(
            {
                where:{
                    numero_quarto: number_room,
                }
            });
    }

    public async save(room: IRoom): Promise<IRoom>
    {
        return this.ormRepository.save(room);
    }

}
