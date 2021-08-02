import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";
import IDeleteSuplier from "@modules/suplier/Domain/Models/IDeleteSuplier";

@injectable()
export default class DeleteSuplierService {
    constructor(
        @inject("SuplierRepository")
        private suplierRepository: ISuplierRepository
    ) {}

    public async execute({ id_fornecedor }: IDeleteSuplier): Promise<void> {
        const suplier = await this.suplierRepository.findById(id_fornecedor);

        if (!suplier) throw new AppError("Fornecedor nao encontrado !!!");

        await this.suplierRepository.delete(suplier);
    }
}
