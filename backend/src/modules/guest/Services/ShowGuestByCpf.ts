import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IGuest from "@modules/guest/Domain/Models/IGuest";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import IShowGuestByCpf from "@modules/guest/Domain/Models/IShowGuestByCpf";

@injectable()
export default class ShowGuestByCpf {
    constructor(
        @inject("GuestRepository")
        private guestRepository: IGuestRepository
    ) {}

    public async executeSearchByCpf({cpf}: IShowGuestByCpf): Promise<IGuest>
    {
        const guest = await this.guestRepository.findByCpf(cpf);

        if (!guest) throw new AppError("O Hospede não encontrado !!");

        return guest;
    }

}
