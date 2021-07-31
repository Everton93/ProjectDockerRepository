import IProduct from "@modules/products/Domain/Models/IProduct";
import Fornecedor from "@modules/suplier/infrastructure/typeorm/entities/Fornecedor";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('Produto')
class Produto implements IProduct {

    @PrimaryGeneratedColumn('uuid')
    id_produto : string;

    @Column()
    nome : string;

    @Column()
    descricao : string;

    @Column('decimal')
    preco : number;

    @Column('int')
    quantidade : number;

    @CreateDateColumn()
    data_de_criacao : Date;

    @UpdateDateColumn()
    data_de_atualizacao : Date;

    @ManyToOne(() => Fornecedor , fornecedor => fornecedor.id_fornecedor)
    fornecedor_id : Fornecedor;

}

export default Produto;

