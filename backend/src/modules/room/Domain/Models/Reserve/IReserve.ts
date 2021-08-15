import { status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";

export default interface IReserve
{
    id_reserva : string;
    hospede_id : string;
    acompanhantes: number;
    quarto_id : string;
    data_reserva : Date;
    data_entrada : Date;
    status : status_reserva;
}


