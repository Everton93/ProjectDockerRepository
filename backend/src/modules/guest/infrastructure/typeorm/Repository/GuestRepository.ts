
import ICreateGuest from "@modules/guest/Domain/Models/ICreateGuest";
import IGuest from "@modules/guest/Domain/Models/IGuest";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import {getRepository, Repository } from "typeorm";
import Hospede from "../Entities/Hospede";


export class GuestRepository implements IGuestRepository {

    private ormRepository : Repository<Hospede>

    constructor(){
         this.ormRepository = getRepository(Hospede);
    }

    public async findAll(): Promise<Array<IGuest>>
    {
        return await this.ormRepository.find();
    }

    public async create({nome, idade, cpf, email,contato}: ICreateGuest): Promise<IGuest>
    {
        const user = await this.ormRepository.create({nome, idade, cpf, email,contato});

        return this.ormRepository.save(user);
    }

    public async findByCpf(cpf: string) : Promise<IGuest | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                cpf,
                },
                });
    }

    public async findById(id_usuario: string) : Promise<IGuest | undefined>
    {
            return await this.ormRepository.findOne({
                where: {
                    id_usuario,
                },
                });
    }

    public async save(guest: IGuest): Promise<IGuest>
    {
        return await this.ormRepository.save(guest);
    }

}
