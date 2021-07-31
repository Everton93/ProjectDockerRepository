import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IShowProduct from "../Domain/Models/IShowProduct";
import IProduct from "../Domain/Models/IProduct";
import IProductRepository from "../Domain/Repository/IProductRepository";

@injectable()

export default  class ShowProductService
{
    constructor(
        @inject("productRepository")
        private productRepository: IProductRepository
    ) {}

    public async SearchProductById ({id_produto}: IShowProduct): Promise<IProduct | undefined>{

        const produto = await this.productRepository.findById(id_produto);

        if(!produto)  throw new AppError('Produto nao encontrado !!');

        return produto;
    }

}



