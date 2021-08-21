import {Router} from "express";
import RoomsController from "@modules/room/infrastructure/http/Controllers/RoomsController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";

const roomsRouter = Router();
const roomsController = new RoomsController();

    roomsRouter.use(isAuthenticated);

    roomsRouter.get("/",roomsController.index);

    roomsRouter.get("/:numero_quarto",
    celebrate({
        [Segments.PARAMS]:{
            numero_quarto: Joi.string().required(),
        },        
    }),roomsController.showRoom);

    roomsRouter.put(
        '/:cpf',
        celebrate({
            [Segments.BODY]:{
                status: Joi.string().required(),        
            },
            [Segments.PARAMS]:{
                numero_quarto: Joi.string().required(),
                },
        }),
        roomsController.updateRoom);

export default roomsRouter;





