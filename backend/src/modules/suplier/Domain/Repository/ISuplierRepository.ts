import ICreateSuplier from "../Models/ICreateSuplier";
import ISuplier from "../Models/ISupplier";

export default interface ISuplierRepository
 {
    findAll(): Promise<ISuplier[]| undefined>;
    findByName(nome: string): Promise<ISuplier | undefined>;
    findById(id_fornecedor: string): Promise<ISuplier | undefined>;
    findByEmail(email: string): Promise<ISuplier | undefined>;
    create(data: ICreateSuplier): Promise<ISuplier>;
    save(suplier: ISuplier): Promise<ISuplier>;
    delete(suplier: ISuplier): Promise<void>;
}
