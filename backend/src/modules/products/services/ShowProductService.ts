import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../infrastructure/typeorm/repositories/ProductsRepository";
import Produto from "../infrastructure/typeorm/entities/Produto";


interface Irequest
{
    id_produto :string;
}

class ShowProductService
{

    public async executeforsSearch ({id_produto}: Irequest): Promise<Produto | undefined>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const produto = await productsRepository.findByid(id_produto);

        if(!produto)  throw new AppError('Produto nao encontrado !!');

        return produto;
    }

}

export default ShowProductService;


