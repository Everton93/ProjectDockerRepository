import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";

export default interface IUpdateReserve
{
    cpf : string;
    status : Status_reserva;
}
