import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ICreateSuplier from "@modules/suplier/Domain/Models/ICreateSuplier";
import ISuplier from "@modules/suplier/Domain/Models/ISupplier";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";


@injectable()
export default class CreateSuplierService
{
    constructor(
        @inject('SuplierRepository')
        private suplierRepository : ISuplierRepository
         ){}

    public async execute ({nome, email, whatsapp}: ICreateSuplier): Promise<ISuplier>{

        const suplier = await this.suplierRepository.findByName(nome);

        if(suplier) throw new AppError("Esse Fornecedor ja consta no sistema !!");

        const fornecedor = await this.suplierRepository.create({
            nome,
            email,
            whatsapp
        });

        return fornecedor;
    }
}

