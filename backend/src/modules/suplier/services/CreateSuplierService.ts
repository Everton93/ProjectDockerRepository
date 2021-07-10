import AppError from "@shared/errors/error";
import { getCustomRepository } from "typeorm";
import { SuplierRepository } from "../typeorm/repositories/SuplierRepository";
import Fornecedor from "../typeorm/entities/Fornecedor";


interface Irequest
{
    nome :string;
    email : string;
    whatsapp : string;
}


class CreateSuplierService
{

    public async execute ({nome, email, whatsapp}: Irequest): Promise<Fornecedor>{
        const suplierRepository = getCustomRepository(SuplierRepository);

        const suplier = await suplierRepository.findByName(nome);

        if(suplier) throw new AppError("Esse Fornecedor ja consta no sistema !!");

        const fornecedor = await suplierRepository.create({
            nome,
            email,
            whatsapp
        });

        await suplierRepository.save(fornecedor);

        return fornecedor;
    }
}

export default CreateSuplierService;
