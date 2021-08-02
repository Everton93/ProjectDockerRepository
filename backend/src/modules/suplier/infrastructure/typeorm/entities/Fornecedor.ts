import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import ISuplier from "@modules/suplier/Domain/Models/ISupplier";

@Entity('Fornecedor')
export default class Fornecedor implements ISuplier {

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



