import {Request , Response} from 'express';
import CreateSessionsService from '../services/CreateSessionService'

export default class SessionsController{

    public async createSession (request : Request, response : Response):Promise<Response>
    {
        const {email, password} = request.body;

        const createSessionsService = new CreateSessionsService();

        const user = await createSessionsService.execute({email, password});

         return response.json(user);
    }

}

