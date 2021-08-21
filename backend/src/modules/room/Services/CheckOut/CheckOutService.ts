import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
import ICheckOut from "@modules/room/Domain/Models/CheckOut/ICheckOut";
import ICheckOutRepository from "@modules/room/Domain/Repository/ICheckOutRepository";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";

@injectable()
export default class CheckOut
{
    constructor(
        @inject("ServiceRoomRepository")
        private checkOutRepository: ICheckOutRepository,
        private serviceRoomRepository: IServiceRoomRepository,
        private roomRepository: IRoomsRepository
    ) {}

    public async executeCheckOut(numero_quarto : string) : Promise<ICheckOut>
    {
        const room = await this.roomRepository.findByNumber(numero_quarto);

        if (!room) throw new AppError("Quarto nao encontrado !!");

        const services = await this.serviceRoomRepository.listAllServicesRoomByRoom(room.id_quarto);

        if (!services) throw new AppError("Não consta Servicos no quarto !!");

        const valorTotal = await services.reduce((soma ,service)=>
        {
            return soma + service.valor;
        }, 0)

        const check = await this.checkOutRepository.create(
            {
                quarto_id : room.id_quarto,
                servicos_de_quartos : services,
                status_check : Status_reserva.pago,
                total : valorTotal
            });

        return check;
    }
}
