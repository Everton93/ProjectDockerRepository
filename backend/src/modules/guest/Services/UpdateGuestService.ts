import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IGuest from "@modules/guest/Domain/Models/IGuest";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import IUpdateGuest from "../Domain/Models/IUpdateGuest";

@injectable()
export default class UpdateGuestService {
    constructor(
        @inject("GuestRepository")
        private guestRepository: IGuestRepository
    ) {}

    public async executeUpdateGuest({id_hospede, nome,idade,cpf,email,contato}: IUpdateGuest): Promise<IGuest>
    {
        const guest = await this.guestRepository.findById(id_hospede);

        if (!guest) throw new AppError("O Hospede não encontrado !!");

        guest.nome = nome;
        guest.idade = idade;
        guest.cpf = cpf;
        guest.email = email;
        guest.contato = contato;

        return await this.guestRepository.save(guest);
    }
}
