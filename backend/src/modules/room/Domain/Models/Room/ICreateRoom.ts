import { Status_Quarto } from "./StatusQuarto";
import { Quartos_Tipos } from "./TiposQuarto";

export default interface ICreateRoom
{
    numero_quarto : number;
    tipos_quartos: Quartos_Tipos;
    descricao: string;
    status_quarto : Status_Quarto;
}
