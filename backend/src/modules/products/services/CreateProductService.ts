import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";
import Produto from "../typeorm/entities/Produto";

interface Irequest
{
    nome :string;
    descricao : string;
    preco : number;
    quantidade : number;
}

class CreateProductService
{

    public async execute ({nome, descricao, preco, quantidade}: Irequest): Promise<Produto>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const product = await productsRepository.findByName(nome);

        if(product) throw new AppError("Esse Produto ja consta no sistema !!");

        const produto = await productsRepository.create({
            nome,
            descricao,
            preco,
            quantidade
        });

        await productsRepository.save(produto);

        return produto;
    }
}

export default CreateProductService;


