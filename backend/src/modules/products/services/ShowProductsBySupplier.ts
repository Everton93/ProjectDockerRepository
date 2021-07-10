/* import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";


interface Irequest
{
    id_fornecedor :string;
}

class ShowProductsBySupplier{

    public async executeforsSearch ({id_fornecedor}: Irequest): Promise<Produto[] | undefined>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const produto = await productsRepository.findByid(id_fornecedor);

        if(!produto)  throw new AppError('Produto nao encontrado !!');

        return produto;
    }


}
 */
