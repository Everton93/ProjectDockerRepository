import { status_reserva } from "./StatusReserve";

export default interface IReserve
{
    id_reserva : string;
    hospede : string;
    acompanhantes: number;
    quarto : string;
    data_reserva : Date;
    data_entrada : Date;
    status : status_reserva;
}


