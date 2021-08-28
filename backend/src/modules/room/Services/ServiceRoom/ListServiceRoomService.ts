import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import RedisCache from "@shared/cache/redisCache";
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
            const redisCache = new RedisCache();

            let servicesRoom = await redisCache.recover<IServiceRoom[]>("api_pousada_SERVICEROOM_LIST");

            if (!servicesRoom)
            {
                servicesRoom = await this.serviceRoomRepository.listAll();

                await redisCache.save("api_pousada_SERVICEROOM_LIST", servicesRoom);
            }

            return servicesRoom ;
        }
}
