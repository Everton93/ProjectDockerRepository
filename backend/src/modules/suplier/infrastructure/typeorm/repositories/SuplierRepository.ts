import ICreateSuplier from "@modules/suplier/Domain/Models/ICreateSuplier";
import ISupplier from "@modules/suplier/Domain/Models/ISupplier";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";
import { getRepository, Repository } from "typeorm";
import Suplier from '../entities/Fornecedor';


export class SuplierRepository implements ISuplierRepository {

    private ormRepository : Repository<Suplier>

    constructor(){
         this.ormRepository = getRepository(Suplier);
    }

    public async findByName(nome: string) : Promise<Suplier | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                nome,
                },
                });
    }

    public async findById(id_fornecedor: string) : Promise<Suplier | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                id_fornecedor,
                },
                });
    }

    public async findByEmail(email: string) : Promise<Suplier | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                email,
                },
                });
    }

    public async create({nome, email, whatsapp}: ICreateSuplier): Promise<ISupplier> {
        const suplier = await this.ormRepository.create({nome, email,whatsapp});


        return await this.save(suplier);

    }
    public async save(suplier: ISupplier): Promise<ISupplier>
    {
        return await this.ormRepository.save(suplier);

    }

    public async findAll(): Promise<ISupplier[] | undefined>
    {
        return await this.ormRepository.find();
    }

    public async delete(suplier: ISupplier): Promise<void>
    {
         await this.ormRepository.delete(suplier);
    }

}
