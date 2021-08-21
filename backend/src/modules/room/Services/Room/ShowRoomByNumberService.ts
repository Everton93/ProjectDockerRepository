import { inject, injectable } from "tsyringe";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IShowRoomByNumber from "@modules/room/Domain/Models/Room/IShowRoomByNumber";
import AppError from "@shared/errors/error";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";

@injectable()
export default class ShowRoomByNumberService
{
    constructor(
        @inject("RoomRepository")
        private readonly roomRepository: IRoomsRepository
    ) {}

    public async executeSearchByNumber({numero_quarto}: IShowRoomByNumber): Promise<IRoom | undefined>
    {
        const room = await this.roomRepository.findByNumber(numero_quarto);

        if (!room)throw new AppError("Quarto não encontrado !!");

        return room;
    }
}
