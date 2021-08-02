import { inject, injectable } from "tsyringe";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import IProduct from "@modules/products/Domain/Models/IProduct";

@injectable()
export default class ListProductService
{
    constructor(
        @inject("productRepository")
        private productRepository: IProductRepository
    ) {}

    public async listAllProducts (): Promise<IProduct[] | undefined>
    {
        return await this.productRepository.findAll();
    }
}


