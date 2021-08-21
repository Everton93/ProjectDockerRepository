import ICreateReserve from "../Models/Reserve/ICreateReserve";
import IReserve from "../Models/Reserve/IReserve";
import IRoomRepository from "./IRoomRepository";

export default interface IReserveRepository extends IRoomRepository<IReserve>
{
    create (data : ICreateReserve): Promise<IReserve>;
    findByGuest(id: string): Promise<IReserve | undefined>;
}
