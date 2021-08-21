import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export default class ListAllReserveService
{
    constructor(
        @inject('ServiceRoomRepository')
        private serviceRoomRepository : IServiceRoomRepository
         ){}


        public async executeList() : Promise <IServiceRoom[]>
        {
            return await this.serviceRoomRepository.listAll();
        }
}
