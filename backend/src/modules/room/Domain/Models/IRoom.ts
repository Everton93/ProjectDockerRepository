import { Quartos_Tipos } from "./TypeRooms";

export default interface IRoom
{
    id_quarto : string;
    numero_quarto : number;
    tipos_quartos: Quartos_Tipos;
    descricao: string;
}
