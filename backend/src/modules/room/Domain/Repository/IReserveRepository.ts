import ICreateReserve from "@modules/room/Domain/Models/Reserve/ICreateReserve";
import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";

export default interface IReserveRepository
{
    listAll () :Promise <Array<IReserve>>;
    create (data : ICreateReserve) : Promise<IReserve>;
    findByid(id_reserva : string ) : Promise<IReserve | undefined>;
    findByGuest(hospede_id : string ) : Promise<IReserve | undefined>;
    findByRoom(quarto_id : string ) : Promise<IReserve | undefined>;
    delete( reserve : IReserve ) : Promise<void>;
    save(reserve: IReserve): Promise<IReserve>;

}
