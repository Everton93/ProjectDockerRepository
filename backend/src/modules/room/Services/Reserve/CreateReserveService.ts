import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import ICreateReserve from "@modules/room/Domain/Models/Reserve/ICreateReserve";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";


@injectable()
export default class CreateReserveService
{
    constructor(
        @inject('ReserveRepository')
        private readonly reserveRepository : IReserveRepository,
        ){}

    public async executeCreateReserve(
        {
        hospede,
        acompanhantes,
        quarto,
        status }: ICreateReserve): Promise<IReserve>
    {
        const reserve = await this.reserveRepository.findByGuest(hospede);

        if (reserve) throw new AppError("Ja consta uma reserva para esse hospede");

        return await this.reserveRepository.create({hospede, acompanhantes,quarto, status});


    }

}


