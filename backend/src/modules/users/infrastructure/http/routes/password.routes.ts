import {Router} from 'express';
import ForgotPasswordController from '../Controllers/ForgotPasswordController';
import ResetPasswordController from '../Controllers/ResetPasswordController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/infrastructure/http/middlewares/isAuthenticated';


const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();


   passwordRouter.post('/test', forgotPasswordController.execute);

   passwordRouter.post(
    '/forgot',
    celebrate({
        [Segments.BODY]:{
        email : Joi.string().email().required(),
        },
    }),forgotPasswordController.executeForgot);

    passwordRouter.post(
        '/reset',
        celebrate({
            [Segments.BODY]:{
            token: Joi.string().uuid().required(),
            password : Joi.string().required(),
            confirm_password : Joi.string().required().valid(Joi.ref('password'))
            },
        }),resetPasswordController.executeReset);


export default passwordRouter;
