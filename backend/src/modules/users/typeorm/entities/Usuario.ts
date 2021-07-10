import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Usuario')
class Usuario
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

export default Usuario;

