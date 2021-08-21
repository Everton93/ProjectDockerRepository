import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import IShowReserveById from "@modules/room/Domain/Models/Reserve/IShowReserveById";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
@injectable()
export default class ShowReserveByIdService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository,

         ){}

         public async executeShowId({id_reserva} : IShowReserveById) : Promise<IReserve | undefined>
         {
            const reserveSearchId = await this.reserveRepository.findById(id_reserva);

            if (!reserveSearchId)throw new AppError("Reserva não encontrada !");

            return reserveSearchId;
         }
}
