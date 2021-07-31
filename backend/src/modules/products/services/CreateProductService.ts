import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ICreateProduct from "../Domain/Models/ICreateProduct";
import IProduct from "../Domain/Models/IProduct";
import IProductRepository from "../Domain/Repository/IProductRepository";

@injectable()
export default class CreateProductService {
    constructor(
        @inject("productRepository")
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
