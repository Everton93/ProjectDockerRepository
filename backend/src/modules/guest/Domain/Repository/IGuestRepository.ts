import ICreateGuest from "../Models/ICreateGuest";
import IGuest from "../Models/IGuest";

export default interface IGuestRepository
{
    findAll(): Promise<IGuest[]| undefined>;
    findById(id_hospede: string): Promise<IGuest | undefined>;
    findByCpf(cpf: string): Promise<IGuest | undefined>;
    create(data: ICreateGuest): Promise<IGuest>;
    save(guest: IGuest): Promise<IGuest>;
}
