import {Router} from 'express';
import SessionsController from '../Controllers/SessionsController';
import { celebrate, Joi, Segments } from 'celebrate';

const sessionsRouter = Router();
const sessionsController = new SessionsController();


    sessionsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]:{
        email : Joi.string().required(),
        password : Joi.string().required()
        },
    }),
    sessionsController.createSession);


export default sessionsRouter;
