import { inject, injectable } from "tsyringe";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";

@injectable()
export default class ListAllReserveService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository
         ){}

        public async executeList() : Promise <IReserve[]>
        {
            return await this.reserveRepository.listAll();
        }


}
