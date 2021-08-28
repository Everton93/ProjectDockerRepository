import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import IUpdateReserve from "@modules/room/Domain/Models/Reserve/IUpdateReserve";
import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import RedisCache from "@shared/cache/redisCache";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";

@injectable()
export default class UpdateReserveService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository,
        
        @inject('GuestRepository')
        private readonly guestRepository : IGuestRepository

         ){}

         public async executeUpdate({cpf, status} : IUpdateReserve) : Promise<IReserve>
         {

            const guest = await this.guestRepository.findByCpf(cpf);

            if(!guest) throw new AppError("hospede não encontrado !");

            const reserveUpdate = await this.reserveRepository.findByGuest(guest.id_hospede);

            if (!reserveUpdate) throw new AppError("Reserva não encontrada !");

            const redisCache = new RedisCache();

            await redisCache.invalidate("api_pousada_RESERVE_LIST");

            reserveUpdate.status = status;

            return  await this.reserveRepository.save(reserveUpdate);

         }
}






