import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('Fornecedor')
class Fornecedor {

    @PrimaryGeneratedColumn('uuid')
    id_fornecedor : string;

    @Column()
    nome : string;

    @Column()
    email : string;

    @Column()
    whatsapp : string;

    @CreateDateColumn()
    data_de_criacao : Date;

    @UpdateDateColumn()
    data_de_atualizacao : Date;

}

export default Fornecedor;

