import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";
import Produto from "../typeorm/entities/Produto";


interface Irequest
{
    id_produto: string;
    nome :string;
    descricao : string;
    preco : number;
    quantidade : number;
}

class UpdateProductService
{

    public async execute ({id_produto ,
        nome,
        descricao,
        preco,
        quantidade}: Irequest): Promise<Produto | undefined>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findOne(id_produto);

        if(!product) throw new AppError('Produto não encontrado!!');

        product.nome = nome;
        product.descricao = descricao;
        product.preco = preco;
        product.quantidade = quantidade;

        return await productsRepository.save(product);
    }
}

export default UpdateProductService;




