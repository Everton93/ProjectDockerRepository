import { inject, injectable } from "tsyringe";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IShowRoomById from "@modules/room/Domain/Models/Room/IShowRoomById";
import AppError from "@shared/errors/error";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";

@injectable()
export default class ShowRoomByIdService
{
    constructor(
        @inject("RoomRepository")
        private readonly roomRepository: IRoomsRepository
    ) {}

    public async executeSearchById({id_quarto,}: IShowRoomById): Promise<IRoom | undefined>
    {
        const room = await this.roomRepository.findById(id_quarto);

        if (!room)throw new AppError("Quarto não encontrado !!");

        return room;
    }
}
