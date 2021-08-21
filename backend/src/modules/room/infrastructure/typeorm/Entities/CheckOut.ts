import { Status_reserva } from "@modules/room/Domain/Models/Reserve/StatusReserve";
import ICheckOut from "@modules/room/Domain/Models/CheckOut/ICheckOut";
import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


export default class CheckOut implements ICheckOut
{
    @PrimaryGeneratedColumn("uuid")
    id_checkout: string;

    @Column()
    quarto_id: string;

    @Column()
    servicos_de_quartos: IServiceRoom[];

    @Column()
    total: number;

    @Column()
    status_check: Status_reserva;

    @CreateDateColumn()
    data_checkout: Date;

}
