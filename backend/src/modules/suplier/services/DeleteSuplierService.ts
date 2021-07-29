import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../infrastructure/typeorm/repositories/SuplierRepository";


interface Irequest
{
    id_fornecedor: string;
}

class DeleteSuplierService{

    public async execute ({id_fornecedor}: Irequest): Promise<void>{
        const suplierRepository = getCustomRepository(SuplierRepository);

        const suplier = await suplierRepository.findOne(id_fornecedor);

        if(!suplier) throw new AppError('Fornecedor nao encontrado !!!');

        await suplierRepository.remove(suplier);
    }
}

export default DeleteSuplierService;
