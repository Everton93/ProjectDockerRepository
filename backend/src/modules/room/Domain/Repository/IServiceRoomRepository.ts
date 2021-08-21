import ICreateServiceRoom from "../Models/ServiceRoom/ICreateServiceRoom";
import IServiceRoom from "../Models/ServiceRoom/IServiceRoom";
import IRoomRepository from "./IRoomRepository";

export default interface IServiceRoomRepository extends IRoomRepository<IServiceRoom>
{
    listAllServicesRoomByRoom(id: string): Promise<Array<IServiceRoom>>;
    create (data : ICreateServiceRoom) : Promise<IServiceRoom>;


}

