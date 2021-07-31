import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IProduct from "../Domain/Models/IProduct";
import IShowProductByName from "../Domain/Models/IShowProductByName";
import IProductRepository from "../Domain/Repository/IProductRepository";

@injectable()
export default class ShowProductServiceByName
{

    constructor(
        @inject("productRepository")
        private productRepository: IProductRepository
    ) {}

    public async executeSearchByName ({nome}: IShowProductByName): Promise<IProduct | undefined>{

        const produto = await this.productRepository.findByName(nome);

        if(!produto)
        {
            throw new AppError('Produto nao encontrado !!');
        }

        return produto;
    }
}




