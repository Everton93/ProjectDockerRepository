import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("ServicoDeQuarto")
export default class ServicoDeQuarto implements IServiceRoom
{
    @PrimaryGeneratedColumn("uuid")
    id_servico: string;

    @Column()
    quarto_id: string;

    @Column()
    produto_id: string;

    @Column()
    quantidade: number;

    @Column()
    valor: number;

    @CreateDateColumn()
    data_de_criacao: Date;

    @UpdateDateColumn()
    data_de_atualização: Date;

}
