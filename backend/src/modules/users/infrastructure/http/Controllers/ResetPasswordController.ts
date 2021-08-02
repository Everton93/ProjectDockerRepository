import {Request , Response} from 'express';
import { container } from "tsyringe";
import ResetPasswordService from '../../../services/ResetPasswordService';

export default class ResetPasswordController{

    public async executeReset (request : Request, response : Response):Promise<Response>
    {
        const {password, token} = request.body;

        const resetPasswordService = container.resolve(ResetPasswordService);

        await resetPasswordService.executeResetPassword({token, password});

         return response.json({message : password, token });
    }

}

