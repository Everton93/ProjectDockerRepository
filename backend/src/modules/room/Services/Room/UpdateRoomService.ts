import { inject, injectable } from "tsyringe";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IUpdateRoom from "@modules/room/Domain/Models/Room/IUpdateRoom";
import AppError from "@shared/errors/error";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";

@injectable()
export default class UpdateRoomService
{
    constructor(
        @inject("RoomRepository")
        private readonly roomRepository: IRoomsRepository
    ) {}

    public async executeUpdateRoom({numero_quarto,status}:IUpdateRoom ): Promise<IRoom>
    {
        const roomUpdate = await this.roomRepository.findByNumber(numero_quarto);

        if(!roomUpdate)throw new AppError("Quarto não encontrado");

        roomUpdate.status_quarto = status;

        return await this.roomRepository.save(roomUpdate);
    }
}
