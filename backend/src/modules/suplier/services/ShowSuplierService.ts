import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ISuplier from "@modules/suplier/Domain/Models/ISupplier";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";
import IShowSuplier from "@modules/suplier/Domain/Models/IShowSuplier";

@injectable()
export default class ShowSuplierService
{
    constructor(
        @inject("SuplierRepository")
        private suplierRepository: ISuplierRepository
    ) {}

    public async executeforsSearch ({id_fornecedor}: IShowSuplier): Promise<ISuplier | undefined>{

        const fornecedor = await this.suplierRepository.findById(id_fornecedor);

        if(!fornecedor)  throw new AppError('Fornecedor nao encontrado !!');

        return fornecedor;
    }

}

