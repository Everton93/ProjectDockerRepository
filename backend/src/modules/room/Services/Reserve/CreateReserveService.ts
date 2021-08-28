import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import ICreateReserve from "@modules/room/Domain/Models/Reserve/ICreateReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import RedisCache from "@shared/cache/redisCache";


@injectable()
export default class CreateReserveService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository,
        ){}

    public async executeCreateReserve(
        {
        hospede_id,
        acompanhantes,
        quarto_id,
        status
        }: ICreateReserve): Promise<IReserve>
    {
        const redisCache = new RedisCache();

        const reserveSearch = await this.reserveRepository.findByGuest(hospede_id);

        if (reserveSearch) throw new AppError("Ja consta uma reserva para esse hospede");

        await redisCache.invalidate("api_pousada_RESERVE_LIST");
    
        const reserve = await this.reserveRepository.create(
            {
                hospede_id,
                acompanhantes,
                quarto_id,
                status
            });

        return reserve;
    }
}