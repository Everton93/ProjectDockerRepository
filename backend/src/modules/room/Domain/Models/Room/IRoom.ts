import { Quartos_Tipos } from "@modules/room/Domain/Models/Room/TiposQuarto";
import { Status_Quarto } from "@modules/room/Domain/Models/Room/StatusQuarto";

export default interface IRoom
{
    id_quarto : string;
    numero_quarto : number;
    tipos_quartos: Quartos_Tipos;
    descricao: string;
    status_quarto : Status_Quarto;
}
