import { EntityRepository, Repository, getConnection } from "typeorm";
import Product from '../entities/Produto';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {

    public async findByName(nome: string) : Promise<Product | undefined>
    {
            return await this.findOne({
                where: {
                nome,
                },
                });
    }

    public async findByid(id_produto: string) : Promise<Product | undefined>
    {
            return await this.findOne({
                where: {
                id_produto : id_produto,
                },
                });
    }

/*     public async findByidSupplier(id_fornecedor: string) : Promise<Product | undefined>
    {
            return await this.findOne({
                where: {
                 : id_produto,
                },
                });
    } */
}
