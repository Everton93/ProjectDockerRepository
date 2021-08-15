import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IShowRoomByNumber from "@modules/room/Domain/Models/Room/IShowRoomByNumber";

export default interface IRoomRepository
{
    listAllRooms(): Promise<Array<IRoom>>;
    findByNumber({numero_quarto} :IShowRoomByNumber): Promise<IRoom | undefined>;
    findbyId(id : string): Promise<IRoom | undefined>;
    save(room: IRoom): Promise<IRoom>;

}
