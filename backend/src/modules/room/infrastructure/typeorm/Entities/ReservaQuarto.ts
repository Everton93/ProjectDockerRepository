import IReserve from "@modules/room/Domain/Models/Reserve/IReserve";
import { status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
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
    data_reserva: Date;

    @UpdateDateColumn()
    data_entrada: Date;

    @Column('enum')
    status: status_reserva;
}
