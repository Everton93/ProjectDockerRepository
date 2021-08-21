import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import { Status_Quarto } from "@modules/room/Domain/Models/Room/StatusQuarto";
import { Quartos_Tipos } from "@modules/room/Domain/Models/Room/TiposQuarto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Quarto')
export default class Quarto implements IRoom
{
    @PrimaryGeneratedColumn('uuid')
    id_quarto: string;

    @Column()
    numero_quarto : number;

    @Column('enum')
    tipos_quartos: Quartos_Tipos;

    @Column()
    descricao: string;

    @Column('enum')
    status_quarto : Status_Quarto;
}
