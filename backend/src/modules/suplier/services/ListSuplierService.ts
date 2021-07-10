import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../typeorm/repositories/SuplierRepository";
import Fornecedor from "../typeorm/entities/Fornecedor";

class ListSuplierService
{

    public async execute (): Promise<Fornecedor[]>{
        const suplierRepository = getCustomRepository(SuplierRepository);

        const suplierList = await suplierRepository.find();

        return suplierList;
    }
}

export default ListSuplierService;
