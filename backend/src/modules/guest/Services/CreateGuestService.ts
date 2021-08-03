import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import ICreateGuest from "@modules/guest/Domain/Models/ICreateGuest";
import IGuest from "@modules/guest/Domain/Models/IGuest";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";

@injectable()
export default class CreateProductService {
    constructor(
        @inject("GuestRepository")
        private guestRepository: IGuestRepository
    ) {}

    public async executeCreate({nome, idade, cpf, email, contato}: ICreateGuest): Promise<IGuest>
    {
        const guest = await this.guestRepository.findByCpf(cpf);

        if (guest) throw new AppError("O Hospede ja tem cadastro no sistema !!");

        return await this.guestRepository.create({
            nome, idade, cpf, email, contato
        });
    }

}
