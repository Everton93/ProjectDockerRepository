import ICheckOut from "../Models/CheckOut/ICheckOut";
import ICreateCheckOut from "../Models/CheckOut/ICreateCheckOut";
import IRoomRepository from "./IRoomRepository";

export default interface ICheckOutRepository extends IRoomRepository<ICheckOut>
{
    create (data : ICreateCheckOut): Promise<ICheckOut>;

}
