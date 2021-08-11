import IRoom from "../Models/IRoom";
import IShowRoomByNumber from "../Models/IShowRoomByNumber";

export default interface IRoomRepository
{
    findAllRooms(): Promise<Array<IRoom>| undefined>;
    findByNumber({numero_quarto} :IShowRoomByNumber): Promise<IRoom | undefined>;
}
