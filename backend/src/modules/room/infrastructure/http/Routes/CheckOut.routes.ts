import {Router} from "express";
import CheckOutController from "@modules/room/infrastructure/http/Controllers/CheckOutController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";

const checkOutRouter = Router();
const checkOutController = new CheckOutController();

checkOutRouter.use(isAuthenticated);


    checkOutRouter.post(
    '/:numero_quarto',
    celebrate({
        [Segments.PARAMS]:{
        numero_quarto: Joi.string().required(),
        },
    }),
    checkOutController.createCheckOut);




export default checkOutRouter;

