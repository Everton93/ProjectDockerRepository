import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IShowRoomByNumber from "@modules/room/Domain/Models/Room/IShowRoomByNumber";
import IRoomRepository from "@modules/room/Domain/Repository/IRoomRepository";
import { getRepository, Repository } from "typeorm";
import Quarto from "../Entities/Quarto";

export default class RoonRepository implements IRoomRepository{


    private readonly ormRepository : Repository<Quarto>

    constructor(){
         this.ormRepository = getRepository(Quarto);
    }

    public async listAllRooms(): Promise<IRoom[]>
    {
        return this.ormRepository.find();
    }

    public async findByNumber({ numero_quarto }: IShowRoomByNumber): Promise<IRoom | undefined>
    {
        return this.ormRepository.findOne(
            {
                where:{
                    numero_quarto,
                }
            });
    }

    public async  findbyId(id: string): Promise<IRoom | undefined> {
        return this.ormRepository.findOne(
            {
                where:{
                    id_quarto : id,
                }
            });
    }

    public async save(room: IRoom): Promise<IRoom>
    {
        return this.ormRepository.save(room);
    }
}
