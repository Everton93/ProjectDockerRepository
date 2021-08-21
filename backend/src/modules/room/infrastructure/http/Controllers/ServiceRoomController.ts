import CreateServiceRoomService from "@modules/room/Services/ServiceRoom/CreateServiceRoomService";
import ListServiceRoomService from "@modules/room/Services/ServiceRoom/ListServiceRoomService";
import ShowServiceRoomService from "@modules/room/Services/ServiceRoom/ShowServiceRoomService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class ServiceRoomController
{

    public async index(response: Response): Promise<Response>
    {
         const listServiceRoom = container.resolve(ListServiceRoomService);

         return response.json(await listServiceRoom.executeList());
    }

    public async createServiceRoom(request: Request, response: Response): Promise<Response>
    {
        const {produto_id, quantidade, valor} = request.body;

        const {numero_quarto}= request.params;

        const createServce = container.resolve(CreateServiceRoomService);

        const create = await createServce.executeCreate(produto_id, quantidade, valor,{numero_quarto});

        return response.json(create);
    }

    public async showServiceRoom (request: Request, response: Response): Promise<Response>
    {
        const {id_servico} = request.params;

        const showService = container.resolve(ShowServiceRoomService);

        const show = await showService.executeforsSearch({id_servico});

       return response.json(show);
    }
}
