import ICreateServiceRoom from "@modules/room/Domain/Models/ServiceRoom/ICreateServiceRoom";
import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import { getRepository, Repository } from "typeorm";
import ServicoDeQuarto from "../Entities/ServicoDeQuarto";

export default class ServiceRoomRepository implements Omit<IServiceRoomRepository,"delete" >

{

    private ormRepository : Repository<ServicoDeQuarto>

    constructor()
    {
         this.ormRepository = getRepository("ServicoDeQuarto");
    }

    public async listAll(): Promise<IServiceRoom[]> {
        return await this.ormRepository.find();
    }

    public async listAllServicesRoomByRoom(id: string): Promise<IServiceRoom[]>
    {
        return await this.ormRepository.find({
            where: {
                quarto_id : id,
            }
        });
    }

    public async create(data: ICreateServiceRoom): Promise<IServiceRoom>
    {
        await this.ormRepository.create(data);

        return await this.ormRepository.save(data);
    }
    public async findById(id : string): Promise<IServiceRoom| undefined>
    {
        return await this.ormRepository.findOne({
            where: {
                id_servico : id,
            }
        });
    }
    public async findByRoom(id : string): Promise<IServiceRoom | undefined>
    {
        return await this.ormRepository.findOne({
            where: {
                quarto_id : id,
            }
        });
    }

    public async save(data: IServiceRoom): Promise<IServiceRoom>
    {
        return await this.ormRepository.save(data);
    }

}
