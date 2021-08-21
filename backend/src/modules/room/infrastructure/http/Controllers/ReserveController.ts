import CreateReserveService from "@modules/room/Services/Reserve/CreateReserveService";
import ListAllReserveService from "@modules/room/Services/Reserve/ListAllReserveService";
import ShowReserveByGuestService from "@modules/room/Services/Reserve/ShowReserveByGuestService";
import ShowReserveByIdService from "@modules/room/Services/Reserve/ShowReserveByIdService";
import UpdateReserveService from "@modules/room/Services/Reserve/UpdateReserveService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class ReserveController {

    public async index(response: Response): Promise<Response> {
        const listService = container.resolve(ListAllReserveService);

        return response.json(await listService.executeList());
    }

    public async createReserve( request: Request, response: Response ): Promise<Response>
    {
        const { hospede_id, acompanhantes, quarto_id, status } = request.body;

        const reserveService = container.resolve(CreateReserveService);

        const reserve = await reserveService.executeCreateReserve({
            hospede_id,
            acompanhantes,
            quarto_id,
            status,
        });

        return response.json(reserve);
    }

    public async showReserveById(request: Request, response: Response ): Promise<Response>
    {
        const { id_reserva } = request.params;

        const showReserveServiceId = container.resolve(ShowReserveByIdService);

        const reserve = showReserveServiceId.executeShowId({ id_reserva });

        return response.json(reserve);
    }

    public async showReserveByGuest(request: Request, response: Response): Promise<Response>
    {
        const { cpf } = request.params;

        const showReserveByGuest = container.resolve(ShowReserveByGuestService);

        const reserve = showReserveByGuest.executeShowGuest({cpf});

        return response.json(reserve);
    }

    public async updateReserve(request: Request, response: Response): Promise<Response>
    {
        const {cpf} = request.params;
        const {status} = request.body;

        const updateReserveService = container.resolve(UpdateReserveService);

        const update = await updateReserveService.executeUpdate({cpf, status});

        return response.json(update);
    }

}
