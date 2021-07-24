import {Request , Response} from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';


export default class ResetPasswordController{

    public async executeForgot (request : Request, response : Response):Promise<Response>
    {
        const {email} = request.body;

        const sendForgotPasswordEmailService = new SendForgotPasswordEmailService();

        await sendForgotPasswordEmailService.execute({email});

         return response.json({message : 'ok'});
    }

    public async execute(response : Response) : Promise <Response>
    {

    console.log("testando requisição !!!")

    return response.json({message : 'ok'});
    }
}

