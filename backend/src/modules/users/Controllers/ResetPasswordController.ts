import {Request , Response} from 'express';
import ResetPasswordService from '../services/ResetPasswordService';


export default class ResetPasswordController{

    public async executeReset (request : Request, response : Response):Promise<Response>
    {
        const {password, token} = request.body;

        const resetPasswordService = new ResetPasswordService();

        await resetPasswordService.execute({token, password});

         return response.json({message : password, token });
    }

}

