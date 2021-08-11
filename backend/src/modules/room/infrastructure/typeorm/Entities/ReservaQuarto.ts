import IReserve from "@modules/room/Domain/Models/IReserve";
import { status_reserva } from "@modules/room/Domain/Models/StatusReserve";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('ReservaDeQuartos')
export default class ReservaDeQuarto implements IReserve
{
    @PrimaryGeneratedColumn('uuid')
    id_reserva: string;

    @Column()
    hospede: string;

    @Column()
    acompanhantes: number;

    @Column()
    quarto: string;

    @CreateDateColumn()
    data_reserva: Date;

    @UpdateDateColumn()
    data_entrada: Date;

    @Column('enum')
    status: status_reserva;
}
