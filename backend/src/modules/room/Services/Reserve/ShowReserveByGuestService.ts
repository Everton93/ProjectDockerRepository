import IShowReserveByGuest from "@modules/room/Domain/Models/Reserve/IShowReserveByGuest";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/error";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";

@injectable()
export default class ShowReserveByGuestService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository,
       
        @inject('GuestRepository')
        private readonly guestRepository : IGuestRepository

         ){}

         public async executeShowGuest({cpf} : IShowReserveByGuest) : Promise<IReserve | undefined>
         {

            const guest = await this.guestRepository.findByCpf(cpf);

            if (!guest) throw new AppError("O Hospede não encontrado !!");

            const reserveSearchGuest = await this.reserveRepository.findByGuest(guest.id_hospede);

            if (!reserveSearchGuest) throw new AppError("Reserva não encontrada !");

            return reserveSearchGuest;
         }
}

