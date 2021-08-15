
import ICreateServiceRoom from "@modules/room/Domain/Models/ServiceRoom/ICreateServiceRoom";
import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import IShowServiceById from "@modules/room/Domain/Models/ServiceRoom/IShowServiceById";
import IShowServiceByRoom from "@modules/room/Domain/Models/ServiceRoom/IShowServiceByRoom";
import IListServiceRoomByRoom from "@modules/room/Domain/Models/ServiceRoom/IListServiceRoomByRoom";

export default interface IServiceRoomRepository
{
    listAllServicesRoomByRoom (numero_quarto : IListServiceRoomByRoom) :Promise <Array<IServiceRoom>>;
    CreateServiceRoom (data : ICreateServiceRoom) : Promise<IServiceRoom>;
    showServiceRoomById(id_servico : IShowServiceById) : Promise<IServiceRoom>;
    showServiceRoomByRoom(id_servico : IShowServiceByRoom) : Promise<IServiceRoom>;
}
