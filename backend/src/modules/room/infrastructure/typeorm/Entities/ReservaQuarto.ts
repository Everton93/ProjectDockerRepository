import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import { Status_reserva} from "@modules/room/Domain/Models/Reserve/StatusReserve";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('ReservaDeQuartos')
export default class ReservaDeQuarto implements IReserve
{
    @PrimaryGeneratedColumn('uuid')
    id_reserva: string;

    @Column()
    hospede_id: string;

    @Column()
    acompanhantes: number;

    @Column()
    quarto_id: string;

    @CreateDateColumn()
    data_de_entrada: Date;

    @UpdateDateColumn()
    data_de_saida: Date;

    @Column('enum')
    status: Status_reserva;
}
