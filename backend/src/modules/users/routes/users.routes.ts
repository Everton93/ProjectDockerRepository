import {Router} from 'express';
import UsersController from '../Controllers/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

    usersRouter.get('/list',usersController.index);

    usersRouter.get(
    '/:id_usuario',
    celebrate({
        [Segments.PARAMS]:{
        id_usuario: Joi.string().uuid().required(),
        },
    }),
    usersController.showUserbyId);

    usersRouter.get(
        '/:email',
        celebrate({
            [Segments.PARAMS]:{
            id_usuario: Joi.string().required(),
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

    usersRouter.put(
    '/:id_fornecedor',
    celebrate({
        [Segments.BODY]:{
        nome: Joi.string().required(),
        email : Joi.string().required(),
        password : Joi.string().required()
        },
        [Segments.PARAMS]:{
            id_usuario: Joi.string().uuid().required(),
            },
    }),
    usersController.updateUser);



export default usersRouter;

