/* import ICreateServiceRoom from "@modules/room/Domain/Models/ICreateServiceRoom";
import IListServiceRoomByRoom from "@modules/room/Domain/Models/IListServiceRoomByRoom";
import IServiceRoom from "@modules/room/Domain/Models/IServiceRoom";
import IShowServiceById from "@modules/room/Domain/Models/IShowServiceById";
import IShowServiceByRoom from "@modules/room/Domain/Models/IShowServiceByRoom";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import { getRepository, Repository } from "typeorm";

export default class ServiceRoomRepository implements IServiceRoomRepository
{

    private ormRepository : Repository<>

    constructor(){
         this.ormRepository = getRepository();
    }

    public async listAllServicesRoomByRoom(numero_quarto: IListServiceRoomByRoom): Promise<IServiceRoom[]> {
        throw new Error("Method not implemented.");
    }
    public async CreateServiceRoom(data: ICreateServiceRoom): Promise<IServiceRoom> {
        throw new Error("Method not implemented.");
    }
    public async showServiceRoomById(id_servico: IShowServiceById): Promise<IServiceRoom> {
        throw new Error("Method not implemented.");
    }
    public async showServiceRoomByRoom(id_servico: IShowServiceByRoom): Promise<IServiceRoom> {
        throw new Error("Method not implemented.");
    }

}

 */
