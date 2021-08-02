import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ISuplier from "@modules/suplier/Domain/Models/ISupplier";
import IUpdateSuplier from "@modules/suplier/Domain/Models/IUpdateSuplier";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";

@injectable()
export default class UpdateSuplierService
{

    constructor(
        @inject("SuplierRepository")
        private suplierRepository: ISuplierRepository
    ) {}

    public async execute ({id_fornecedor ,
        nome,
        email,
        whatsapp}: IUpdateSuplier): Promise<ISuplier | undefined>{

        const suplier = await this.suplierRepository.findById(id_fornecedor);

        if(!suplier) throw new AppError('Fornecedor não encontrado!!');

        suplier.nome = nome;
        suplier.email = email;
        suplier.whatsapp = whatsapp;

        return await this.suplierRepository.save(suplier);
    }
}

