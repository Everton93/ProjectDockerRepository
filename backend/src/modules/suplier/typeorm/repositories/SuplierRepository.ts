import { EntityRepository, Repository } from "typeorm";
import Suplier from '../entities/Fornecedor';


@EntityRepository(Suplier)
export class SuplierRepository extends Repository<Suplier> {

    public async findByName(nome: string) : Promise<Suplier | undefined>
    {
            return await this.findOne({
                where: {
                nome,
                },
                });
    }

    public async findByid(id_fornecedor: string) : Promise<Suplier | undefined>
    {
            return await this.findOne({
                where: {
                id_fornecedor : id_fornecedor,
                },
                });
    }

}
