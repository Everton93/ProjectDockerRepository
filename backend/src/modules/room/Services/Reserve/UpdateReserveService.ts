import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import IUpdateReserve from "@modules/room/Domain/Models/Reserve/IUpdateReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";

@injectable()
export default class UpdateReserveService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository
         ){}

         public async executeShowReserveByRoom({
            id_reserva,
            status} : IUpdateReserve) : Promise<IReserve>
         {

            const reserveUpdate = await this.reserveRepository.findByid(id_reserva);

            if (!reserveUpdate) throw new AppError("Reserva não encontrada !");

            reserveUpdate.status = status;

            return  await this.reserveRepository.save(reserveUpdate);

         }
}






