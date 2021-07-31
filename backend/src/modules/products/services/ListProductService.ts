import { inject, injectable } from "tsyringe";
import IProductRepository from "../Domain/Repository/IProductRepository";
import IProduct from "../Domain/Models/IProduct";

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


