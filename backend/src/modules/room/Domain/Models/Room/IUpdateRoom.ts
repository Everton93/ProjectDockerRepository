import { Status_Quarto } from "@modules/room/Domain/Models/Room/StatusQuarto";

export default interface IRoom
{
    numero_quarto : string;
    status : Status_Quarto;
}
