import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../infrastructure/typeorm/repositories/SuplierRepository";
import Fornecedor from "../infrastructure/typeorm/entities/Fornecedor";

import { inject, injectable } from "tsyringe";
import ISuplier from "../Domain/Models/ISupplier";
import ISuplierRepository from "../Domain/Repository/ISuplierRepository";

@injectable()
export default class ListSuplierService
{
        constructor(
        @inject("SuplierRepository")
        private suplierRepository: ISuplierRepository
    ) {}

    public async execute (): Promise<ISuplier[] | undefined>
    {

        return await this.suplierRepository.findAll();
    }
}

