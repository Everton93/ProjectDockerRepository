import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";
import Produto from "../typeorm/entities/Produto";

interface Irequest
{
    nome :string;
}

class ShowProductServiceByName
{

    public async execute ({nome}: Irequest): Promise<Produto | undefined>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const produto = await productsRepository.findByName(nome);

        if(!produto)
        {
            throw new AppError('Produto nao encontrado !!');
        }

        return produto;
    }
}

export default ShowProductServiceByName;



