import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IShowProduct from "@modules/products/Domain/Models/IShowProduct";
import IProduct from "@modules/products/Domain/Models/IProduct";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";

@injectable()

export default  class ShowProductService
{
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    public async SearchProductById ({id_produto}: IShowProduct): Promise<IProduct | undefined>{

        const produto = await this.productRepository.findById(id_produto);

        if(!produto)  throw new AppError('Produto nao encontrado !!');

        return produto;
    }

}



