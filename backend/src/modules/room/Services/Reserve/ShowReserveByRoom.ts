import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import IShowReserveByRoom from "@modules/room/Domain/Models/Reserve/IShowReserveByRoom";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
@injectable()
export default class ShowReserveByRoom
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository
         ){}

         public async executeShowReserveByRoom({quarto_id} : IShowReserveByRoom) : Promise<IReserve | undefined>
         {
            const reserveSearchRoom = await this.reserveRepository.findByRoom(quarto_id);

            if (!reserveSearchRoom)throw new AppError("Reserva não encontrada !");

            return reserveSearchRoom;
         }
}
