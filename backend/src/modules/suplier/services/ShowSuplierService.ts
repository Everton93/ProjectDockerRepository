import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../infrastructure/typeorm/repositories/SuplierRepository";
import Fornecedor from "../infrastructure/typeorm/entities/Fornecedor";


interface Irequest
{
    id_fornecedor: string;
}

class ShowSuplierService
{

    public async executeforsSearch ({id_fornecedor}: Irequest): Promise<Fornecedor | undefined>{
        const suplierRepository = getCustomRepository(SuplierRepository);

        const fornecedor = await suplierRepository.findByid(id_fornecedor);

        if(!fornecedor)  throw new AppError('Fornecedor nao encontrado !!');

        return fornecedor;
    }

}

export default ShowSuplierService;
