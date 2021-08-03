import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IProduct from "../Domain/Models/IProduct";
import IUpdateProduct from "../Domain/Models/IUpdateProduct";
import IProductRepository from "../Domain/Repository/IProductRepository";

@injectable()
class UpdateProductService
{

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    public async executeUpdate ({id_produto ,
        nome,
        descricao,
        preco,
        quantidade}: IUpdateProduct): Promise<IProduct | undefined>{

        const product = await this.productRepository.findById(id_produto);

        if(!product) throw new AppError('Produto não encontrado!!');

        product.nome = nome;
        product.descricao = descricao;
        product.preco = preco;
        product.quantidade = quantidade;

        return await this.productRepository.save(product);
    }
}

export default UpdateProductService;




