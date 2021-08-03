import IUser from "@modules/users/Domain/Models/IUser";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Usuario')
export default class Usuario implements IUser
{
    @PrimaryGeneratedColumn('uuid')
    id_usuario : string;

    @Column()
    nome : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    avatar : string;

    @CreateDateColumn()
    data_de_criacao : Date;

    @UpdateDateColumn()
    data_de_atualizacao : Date;

}


