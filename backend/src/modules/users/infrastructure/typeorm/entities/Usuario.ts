import IUser from "@modules/users/Domain/Models/IUser";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import {Exclude} from "class-transformer";


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
    @Exclude()
    password : string;

    @Column()
    @Exclude()
    avatar : string;

    @CreateDateColumn()
    data_de_criacao : Date;

    @UpdateDateColumn()
    data_de_atualizacao : Date;

}


