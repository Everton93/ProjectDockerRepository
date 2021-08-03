import {Request , Response} from "express";
import { container } from "tsyringe";
import CreateGuestService from "@modules/guest/Services/CreateGuestService";
import ListGuestsService from "@modules/guest/Services/ListGuestsService";
import ShowGuestById from "@modules/guest/Services/ShowGuestById";
import ShowGuestByCpf from "@modules/guest/Services/ShowGuestByCpf";
import UpdateGuestService from "@modules/guest/Services/UpdateGuestService";

export default class GuestController{

    public async index (request : Request, response : Response):Promise<Response>
    {
        const listGuestService = container.resolve(ListGuestsService);
        const guestList = await listGuestService.executeListGuests();

        return response.json(guestList);
    }

    public async showGuestById (request : Request, response : Response):Promise<Response>
    {
        const {id_hospede} = request.params;

        const showGuestServiceId = container.resolve(ShowGuestById);

        const guestSearchId = await showGuestServiceId.executeSearchById({id_hospede});

        return response.json(guestSearchId);
    }

    public async showGuestByCpf (request : Request, response : Response):Promise<Response>
    {
        const {cpf} = request.params;

        const showGuestServiceByCpf = container.resolve(ShowGuestByCpf);

        const guestServiceByCpf = await showGuestServiceByCpf.executeSearchByCpf ({cpf});

        return response.json(guestServiceByCpf);
    }

    public async createGuest (request : Request, response : Response):Promise<Response>
    {
        const {nome, idade, cpf, email, contato} = request.body;

        const createGuestService = container.resolve(CreateGuestService);

        const productCreate = await createGuestService.executeCreate({
            nome,
            idade,
            cpf,
            email,
            contato
        });

        return response.json(productCreate);
    }

    public async updateGuest (request : Request, response : Response):Promise<Response>
    {
        const {nome, idade, cpf, email, contato} =request.body;
        const {id_hospede} = request.params;

        const updateGuestService = container.resolve(UpdateGuestService);

            return response.json(updateGuestService.executeUpdateGuest(
            {
                id_hospede,
                nome,
                idade,
                cpf,
                email,
                contato
            }));
    }
}


