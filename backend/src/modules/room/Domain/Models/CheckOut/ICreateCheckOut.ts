import { Status_reserva } from "../Reserve/StatusReserve";
import IServiceRoom from "../ServiceRoom/IServiceRoom";

export default interface ICreateCheckOut
{
    quarto_id : string;
    servicos_de_quartos : Array<IServiceRoom>;
    status_check : Status_reserva;
    total : number;
}
