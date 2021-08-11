import IRoom from "@modules/room/Domain/Models/IRoom";
import { Quartos_Tipos } from "@modules/room/Domain/Models/TypeRooms";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Quarto')
export default class Quarto implements IRoom
{
    @PrimaryGeneratedColumn('uuid')
    id_quarto: string;

    @Column()
    numero_quarto : number;

    @Column()
    tipos_quartos: Quartos_Tipos;

    @Column()
    descricao: string;
}
