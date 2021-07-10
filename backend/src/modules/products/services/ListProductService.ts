import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";
import Produto from "../typeorm/entities/Produto";


class ListProductService
{

    public async execute (): Promise<Produto[]>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const productList = await productsRepository.find();

        return productList;
    }
}

export default ListProductService;

