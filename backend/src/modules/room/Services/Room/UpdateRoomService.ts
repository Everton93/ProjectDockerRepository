import { inject, injectable } from "tsyringe";
import IRoomRepository from "@modules/room/Domain/Repository/IRoomRepository";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IUpdateRoom from "@modules/room/Domain/Models/Room/IUpdateRoom";
import AppError from "@shared/errors/error";

@injectable()
export default class UpdateRoomService
{
    constructor(
        @inject("RoomRepository")
        private readonly roomRepository: IRoomRepository
    ) {}

    public async executeUpdateRoom({id_quarto,status}:IUpdateRoom ): Promise<IRoom>
    {
        const roomUpdate = await this.roomRepository.findbyId(id_quarto);

        if(!roomUpdate)throw new AppError("Quarto não encontrado");

        roomUpdate.status = status

        return await this.roomRepository.save(roomUpdate);
    }
}
