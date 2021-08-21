import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
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
            const listReserve = await this.reserveRepository.listAll();

            const listNewReserve =  listReserve.filter((reserve : IReserve) => {
                if(reserve.data_de_entrada > new Date() && reserve.status === Status_reserva.em_espera )
                {
                    this.reserveRepository.delete(reserve);
                }
            });

            return listNewReserve;
        }


}
