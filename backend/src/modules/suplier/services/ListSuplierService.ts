import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../infrastructure/typeorm/repositories/SuplierRepository";
import Fornecedor from "../infrastructure/typeorm/entities/Fornecedor";

class ListSuplierService
{

    public async execute (): Promise<Fornecedor[]>{
        const suplierRepository = getCustomRepository(SuplierRepository);

        const suplierList = await suplierRepository.find();

        return suplierList;
    }
}

export default ListSuplierService;
