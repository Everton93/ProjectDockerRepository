import { inject, injectable } from "tsyringe";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";

@injectable()
export default class ListAllRoomsService
{
    constructor(
        @inject('RoomRepository')
        private readonly roomRepository : IRoomsRepository
         ){}

        public async executeList() : Promise <IRoom[]>
        {
            return await this.roomRepository.listAll();
        }


}
