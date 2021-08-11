import ICreateProduct from "../Models/ICreateProduct";
import IProduct from "../Models/IProduct";

export default interface IProductRepository
{
    findAll(): Promise<Array<IProduct>| undefined>;
    findById(id_produto: string): Promise<IProduct | undefined>;
    findByName(nome: string): Promise<IProduct | undefined>;
    create(data: ICreateProduct): Promise<IProduct>;
    save(product: IProduct): Promise<IProduct>;
    delete(product: IProduct): Promise<void>;
}
