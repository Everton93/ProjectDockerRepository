import IShowReserveByGuest from "@modules/room/Domain/Models/Reserve/IShowReserveByGuest";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/error";

@injectable()
export default class ShowReserveById
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository
         ){}

         public async executeShowReserveByGuest({hospede_id} : IShowReserveByGuest) : Promise<IReserve | undefined>
         {
            const reserveSearchGuest = await this.reserveRepository.findByGuest(hospede_id);

            if (!reserveSearchGuest) throw new AppError("Reserva não encontrada !");

            return reserveSearchGuest;
         }
}

