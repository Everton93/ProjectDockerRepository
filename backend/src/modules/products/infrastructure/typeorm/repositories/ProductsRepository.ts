import ICreateProduct from "@modules/products/Domain/Models/ICreateProduct";
import IProduct from "@modules/products/Domain/Models/IProduct";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import { Repository, getRepository } from "typeorm";
import Product from "../entities/Produto";

export class ProductsRepository implements IProductRepository {
    private ormRepository: Repository<Product>;

    constructor() {
        this.ormRepository = getRepository(Product);
    }

    public async findAll(): Promise<Array<IProduct> | undefined> {
        return this.ormRepository.find();
    }

    public async findById(id_produto: string): Promise<IProduct | undefined> {
        return await this.ormRepository.findOne({
            where: {
                id_produto: id_produto,
            },
        });
    }

    public async findByName(nome: string): Promise<Product | undefined> {
        return await this.ormRepository.findOne({
            where: {
                nome,
            },
        });
    }

    public async create({
        nome,
        descricao,
        preco,
        quantidade,
    }: ICreateProduct): Promise<IProduct> {
        const createProduct = await this.ormRepository.create({
            nome,
            descricao,
            preco,
            quantidade,
        });

        return await this.ormRepository.save(createProduct);
    }

    public async save(product: IProduct): Promise<IProduct> {
        return this.ormRepository.save(product);
    }

    public async delete(product: IProduct): Promise<void> {
        await this.ormRepository.delete(product);
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
