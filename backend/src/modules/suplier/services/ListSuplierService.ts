import { inject, injectable } from "tsyringe";
import ISuplier from "@modules/suplier/Domain/Models/ISupplier";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";

@injectable()
export default class ListSuplierService
{
        constructor(
        @inject("SuplierRepository")
        private suplierRepository: ISuplierRepository
    ) {}

    public async execute (): Promise<Array<ISuplier> | undefined>
    {

        return await this.suplierRepository.findAll();
    }
}

