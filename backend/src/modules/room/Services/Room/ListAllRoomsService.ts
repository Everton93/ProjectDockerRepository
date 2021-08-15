import { inject, injectable } from "tsyringe";
import IRoomRepository from "@modules/room/Domain/Repository/IRoomRepository";
import IRoom from "@modules/room/Domain/Models/Room/IRoom";

@injectable()
export default class ListAllRoomsService
{
    constructor(
        @inject('RoomRepository')
        private readonly roomRepository : IRoomRepository
         ){}

        public async executeList() : Promise <IRoom[]>
        {
            return await this.roomRepository.listAllRooms();
        }


}
