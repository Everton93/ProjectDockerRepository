import { status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";

export default interface IUpdateReserve
{
    id_reserva : string;
    status : status_reserva;
}
