import ITokenUser from "@modules/users/Domain/Models/ITokenUser";
import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('TokensDeUsuarios')
export default class TokenUsuario implements ITokenUser
{
    @PrimaryGeneratedColumn('uuid')
    id_token : string;

    @Column()
    @Generated('uuid')
    token : string;

    @Column()
    usuario_id : string;

    @CreateDateColumn()
    data_de_criacao : Date;

    @UpdateDateColumn()
    data_de_atualizacao : Date;

}

