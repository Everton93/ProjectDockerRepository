import CheckOutService from "@modules/room/Services/CheckOut/CheckOutService";
import {Request , Response} from "express";
import { container } from "tsyringe";

export default class CheckOutController
{
    public async createCheckOut(request: Request, response: Response): Promise<Response>
    {
        const {numero_quarto} = request.params;

        const createCheckOut = container.resolve(CheckOutService);

        const check = await createCheckOut.executeCheckOut(numero_quarto);

        return response.json(check);
    }
}
