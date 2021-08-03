import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import IDeleteProduct from "@modules/products/Domain/Models/IDeleteProduct";

@injectable()
export default class DeleteProductService
{
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    public async executeDelete({id_produto}: IDeleteProduct): Promise<void>{

        const produto = await this.productRepository.findById(id_produto);

        if(!produto)throw new AppError('Produto nao encontrado !!!');

        await this.productRepository.delete(produto);
    }
}



