import { Status_reserva } from "./StatusReserve";

export default interface ICreateReserve
{
    hospede_id : string;
    acompanhantes: number;
    quarto_id : string;
    status : Status_reserva;
}




