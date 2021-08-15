import IGuest from "@modules/guest/Domain/Models/IGuest";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Usuario')
export default class Hospede implements IGuest
{

    @PrimaryGeneratedColumn('uuid')
    id_hospede: string;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    contato: string;

    @CreateDateColumn()
    data_de_criacao: Date;

    @UpdateDateColumn()
    data_de_atualizacao: Date;

}
