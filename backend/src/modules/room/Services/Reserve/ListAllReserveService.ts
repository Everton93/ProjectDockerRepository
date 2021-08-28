import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import RedisCache from "@shared/cache/redisCache";
import { inject, injectable } from "tsyringe";


@injectable()
export default class ListAllReserveService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository
         ){}

        public async executeList() : Promise <IReserve[]>
        {

            const redisCache = new RedisCache();

            let reserves = await redisCache.recover<IReserve[]>(
                "api_pousada_RESERVE_LIST",
              );

            if(!reserves)
            {
                reserves  = await this.reserveRepository.listAll();

                await redisCache.save("api_pousada_RESERVE_LIST", reserves);
            }    

            const listNewReserve =  reserves.filter((reserve : IReserve) => {
                if(reserve.data_de_entrada < new Date() && reserve.status === Status_reserva.em_espera )
                {
                    this.reserveRepository.delete(reserve);
                }
            });

            return listNewReserve;
        }


}
