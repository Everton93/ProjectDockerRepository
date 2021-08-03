import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";
import IGuest from "@modules/guest/Domain/Models/IGuest";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import IShowGuestById from "@modules/guest/Domain/Models/IShowGuestById";

@injectable()
export default class ShowGuestById {
    constructor(
        @inject("GuestRepository")
        private guestRepository: IGuestRepository
    ) {}

    public async executeSearchById({id_hospede}: IShowGuestById): Promise<IGuest>
    {
        const guest = await this.guestRepository.findById(id_hospede);

        if (!guest) throw new AppError("O Hospede não encontrado !!");

        return guest;
    }
}
