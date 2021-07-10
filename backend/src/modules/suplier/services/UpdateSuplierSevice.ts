import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../typeorm/repositories/SuplierRepository";
import Fornecedor from "../typeorm/entities/Fornecedor";


interface Irequest
{
    id_fornecedor: string;
    nome :string;
    email : string;
    whatsapp : string;
}

class UpdateSuplierService
{

    public async execute ({id_fornecedor ,
        nome,
        email,
        whatsapp}: Irequest): Promise<Fornecedor | undefined>{
        const suplierRepository = getCustomRepository(SuplierRepository);
        const suplier = await suplierRepository.findOne(id_fornecedor);

        if(!suplier) throw new AppError('Fornecedor não encontrado!!');

        suplier.nome = nome;
        suplier.email = email;
        suplier.whatsapp = whatsapp;

        return await suplierRepository.save(suplier);
    }
}

export default UpdateSuplierService;
