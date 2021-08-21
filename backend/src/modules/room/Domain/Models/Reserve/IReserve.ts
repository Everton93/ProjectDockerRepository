import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";

export default interface IReserve
{
    id_reserva : string;
    hospede_id : string;
    acompanhantes: number;
    quarto_id : string;
    data_de_entrada : Date;
    data_de_saida : Date;
    status : Status_reserva;
}


