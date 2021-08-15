import {Request , Response} from 'express';
import { container } from "tsyringe";
import SendForgotPasswordEmailService from '../../../services/SendForgotPasswordEmailService';

export default class ResetPasswordController{

    public async executeForgot (request : Request, response : Response):Promise<Response>
    {
        const {email} = request.body;

        const sendForgotPasswordEmailService =  container.resolve(SendForgotPasswordEmailService);


        await sendForgotPasswordEmailService.executeSendForgot({email});

         return response.json({message : 'ok'});
    }
}


