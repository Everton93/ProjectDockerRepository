import {Router} from 'express';
import UsersController from '../Controllers/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/infrastructure/http/middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.use(isAuthenticated);

    usersRouter.get('/list',usersController.index);

    usersRouter.get(
        '/email/:email',
        celebrate({
            [Segments.PARAMS]:{
            email: Joi.string().required(),
            },
        }),
        usersController.showUserbyEmail);

    usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]:{
        nome: Joi.string().required(),
        email : Joi.string().required(),
        password : Joi.string().required()
        },
    }),
    usersController.createUser);


export default usersRouter;

