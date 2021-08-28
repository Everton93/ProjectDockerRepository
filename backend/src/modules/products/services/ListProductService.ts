import { inject, injectable } from "tsyringe";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import IProduct from "@modules/products/Domain/Models/IProduct";
import RedisCache from "@shared/cache/redisCache";

@injectable()
export default class ListProductService
{
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    public async listAllProducts (): Promise<Array<IProduct> | undefined>
    {
         const redisCache = new RedisCache();

         let products = await redisCache.recover<IProduct[]>("api_pousada_PRODUCT_LIST");

         if (!products)
         {
            products = await this.productRepository.findAll();

            await redisCache.save("api_pousada_PRODUCT_LIST", products);
         }

        return products;
    }
}


