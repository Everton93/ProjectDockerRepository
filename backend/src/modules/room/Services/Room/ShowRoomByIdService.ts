import { inject, injectable } from "tsyringe";
import IRoomRepository from "@modules/room/Domain/Repository/IRoomRepository";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IShowRoomById from "@modules/room/Domain/Models/Room/IShowRoomById";
import AppError from "@shared/errors/error";

@injectable()
export default class ShowRoomByIdService
{
    constructor(
        @inject("RoomRepository")
        private readonly roomRepository: IRoomRepository
    ) {}

    public async executeSearchById({id_quarto,}: IShowRoomById): Promise<IRoom | undefined>
    {
        const room = await this.roomRepository.findbyId(id_quarto);

        if (!room)throw new AppError("Quarto não encontrado !!");

        return await this.roomRepository.findbyId(id_quarto);
    }
}
