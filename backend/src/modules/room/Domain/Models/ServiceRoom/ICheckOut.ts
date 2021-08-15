import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom"
import { status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";

export default interface ICheckOut
{
    id_checkout: string;
    quarto_id : string;
    servicos_de_quartos : Array<IServiceRoom>;
    total : number;
    status_check : status_reserva;
    data_checkout : Date;
}
