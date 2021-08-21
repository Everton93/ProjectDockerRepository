import {Router} from "express";
import ServiceRoomController from "@modules/room/infrastructure/http/Controllers/ServiceRoomController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";

const serviceRoomRouter = Router();
const serviceRoomController = new ServiceRoomController();

serviceRoomRouter.use(isAuthenticated);


    serviceRoomRouter.get('/list', serviceRoomController.index);

    serviceRoomRouter.get(
    '/:id_servico',
    celebrate({
        [Segments.PARAMS]:{
            id_servico: Joi.string().uuid().required(),
        },
    }),
    serviceRoomController.showServiceRoom);

        
    serviceRoomRouter.post(
        '/numero_quarto',
        celebrate({
            [Segments.BODY]:{
            produto_id : Joi.string().uuid().required(),
            quantidade: Joi.number().required(), 
            valor : Joi.number().required(),    
            [Segments.PARAMS]:{
                numero_quarto: Joi.string().required(),
            },                                   },
        }),
        serviceRoomController.createServiceRoom);
                    
export default serviceRoomRouter;





