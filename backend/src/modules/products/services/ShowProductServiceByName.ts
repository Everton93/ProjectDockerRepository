import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IProduct from "@modules/products/Domain/Models/IProduct";
import IShowProductByName from "@modules/products/Domain/Models/IShowProductByName";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";

@injectable()
export default class ShowProductServiceByName
{

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    public async executeSearchByName ({nome}: IShowProductByName): Promise<IProduct | undefined>{

        const produto = await this.productRepository.findByName(nome);

        if(!produto) throw new AppError('Produto nao encontrado !!');

        return produto;
    }
}




