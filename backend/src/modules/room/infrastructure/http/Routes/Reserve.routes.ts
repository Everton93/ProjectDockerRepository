import {Router} from "express";
import ReserveController from "@modules/room/infrastructure/http/Controllers/ReserveController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";

const reserveRouter = Router();
const reserveController = new ReserveController();

reserveRouter.use(isAuthenticated);


    reserveRouter.get('/list', reserveController.index);

    reserveRouter.get(
    '/:id_reserva',
    celebrate({
        [Segments.PARAMS]:{
            id_reserva: Joi.string().uuid().required(),
        },
    }),
    reserveController.showReserveById);

    reserveRouter.post(
        '/:cpf',
        celebrate({
            [Segments.PARAMS]:{
                cpf: Joi.string().required(),
            },
        }),
        reserveController.showReserveByGuest);
            
        
    reserveRouter.post(
            '/create',
            celebrate({
                [Segments.BODY]:{
                hospede_id: Joi.string().uuid().required(),
                acompanhantes : Joi.number().required(),
                numero_quarto: Joi.string().required(),
                status : Joi.string().required(),
                },
            }),
            reserveController.createReserve);
 
            reserveRouter.put(
                '/:cpf',
                celebrate({
                    [Segments.BODY]:{
                    status: Joi.string().required(),        
                    },
                    [Segments.PARAMS]:{
                        cpf: Joi.string().required(),
                        },
                }),
                reserveController.updateReserve);
                        



export default reserveRouter;





