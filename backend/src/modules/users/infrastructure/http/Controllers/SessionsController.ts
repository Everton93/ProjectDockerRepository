import {Request , Response} from 'express';
import { container } from "tsyringe";
import CreateSessionsService from '../../../services/CreateSessionService'
export default class SessionsController{

    public async createSession (request : Request, response : Response):Promise<Response>
    {
        const {email, password} = request.body;

        const createSessionsService = container.resolve(CreateSessionsService);

        const user = await createSessionsService.executeSession({email, password});

         return response.json(user);
    }

}

