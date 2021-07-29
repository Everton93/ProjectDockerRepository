import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../infrastructure/typeorm/repositories/ProductsRepository";


interface Irequest
{
    id_produto :string;
}

class DeleteProductService
{

    public async execute ({id_produto}: Irequest): Promise<void>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const produto = await productsRepository.findOne(id_produto);

        if(!produto)throw new AppError('Produto nao encontrado !!!');


        await productsRepository.remove(produto);
    }
}

export default DeleteProductService;


