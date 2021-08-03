import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ICreateProduct from "@modules/products/Domain/Models/ICreateProduct";
import IProduct from "@modules/products/Domain/Models/IProduct";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";

@injectable()
export default class CreateProductService {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    public async executeCreate({
        nome,
        descricao,
        preco,
        quantidade,
    }: ICreateProduct): Promise<IProduct> {

        const product = await this.productRepository.findByName(nome);

        if (product) throw new AppError("Esse Produto ja consta no sistema !!");

        return await this.productRepository.create({
            nome,
            descricao,
            preco,
            quantidade,
        });;
    }
}
