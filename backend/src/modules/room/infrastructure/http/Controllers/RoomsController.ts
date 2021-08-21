import ListAllRoomsService from "@modules/room/Services/Room/ListAllRoomsService";
import ShowRoomByNumberService from "@modules/room/Services/Room/ShowRoomByNumberService";
import UpdateRoomService from "@modules/room/Services/Room/UpdateRoomService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class RoomsController
{

    public async index (response: Response) : Promise<Response>
    {
        const listRoom = container.resolve(ListAllRoomsService);

        return response.json(await listRoom.executeList());
    }


    public async showRoom(request: Request, response: Response): Promise<Response>
    {
        const {numero_quarto} = request.params;

        const showRooms = container.resolve(ShowRoomByNumberService);

        const roomSearch = await showRooms.executeSearchByNumber({numero_quarto});

        return response.json(roomSearch);
    }

    public async updateRoom(request: Request, response: Response) : Promise<Response>
    {
        const {numero_quarto} = request.params;

        const {status} = request.body;

        const updateService = container.resolve(UpdateRoomService);

        const roomUpdate = await updateService.executeUpdateRoom({numero_quarto, status});

        return response.json(roomUpdate);

    }
}
