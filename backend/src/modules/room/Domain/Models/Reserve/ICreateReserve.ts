import { status_reserva } from "./StatusReserve";

export default interface ICreateReserve
{
    hospede : string;
    acompanhantes: number;
    quarto : string;
    status : status_reserva;
}




