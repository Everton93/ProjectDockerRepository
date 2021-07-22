import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Usuario from "./Usuario";

@Entity('TokensDeUsuarios')
class TokenUsuario
{
    @PrimaryGeneratedColumn('uuid')
    id_token : string;

    @Column()
    @Generated('uuid')
    token : string;

    @Column()
    user_id : string;

    @CreateDateColumn()
    data_de_criacao : Date;

    @UpdateDateColumn()
    data_de_atualizacao : Date;

}

export default TokenUsuario;

