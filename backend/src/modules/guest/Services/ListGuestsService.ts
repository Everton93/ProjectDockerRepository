import { inject, injectable } from "tsyringe";
import IGuest from "@modules/guest/Domain/Models/IGuest";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";


@injectable()
export default class ListGuestsService {
    constructor(
        @inject("GuestRepository")
        private guestRepository: IGuestRepository
    ) {}

    public async executeListGuests(): Promise<IGuest [] | undefined>
    {
        return await this.guestRepository.findAll();
    }

}
