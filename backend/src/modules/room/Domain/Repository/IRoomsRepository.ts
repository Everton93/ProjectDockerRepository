import IRoom from "../Models/Room/IRoom";
import IRoomRepository from "./IRoomRepository";

export default interface IRoomsRepository extends IRoomRepository<IRoom>
{
    findByNumber(numero_quarto : string): Promise <IRoom | undefined>;
}
