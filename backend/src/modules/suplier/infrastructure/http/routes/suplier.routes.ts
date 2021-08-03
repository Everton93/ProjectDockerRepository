import {Router} from "express";
import SuplierController from "../Controllers/SuplierController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";

const suplierRouter = Router();
const fornecedorController = new SuplierController();

suplierRouter.use(isAuthenticated);

    suplierRouter.get('/list',fornecedorController.index);

    suplierRouter.get(
    '/:id_fornecedor',
    celebrate({
        [Segments.PARAMS]:{
        id_fornecedor: Joi.string().uuid().required(),
        },
    }),
    fornecedorController.showSuplier);

    suplierRouter.post(
    '/',
    celebrate({
        [Segments.BODY]:{
        nome: Joi.string().required(),
        email : Joi.string().email().required(),
        whatsapp : Joi.string().required()
        },
    }),
    fornecedorController.createSuplier);

    suplierRouter.put(
    '/:id_fornecedor',
    celebrate({
        [Segments.BODY]:{
        nome: Joi.string().required(),
        email : Joi.string().email().required(),
        whatsapp : Joi.string().required()
        },
        [Segments.PARAMS]:{
            id_fornecedor: Joi.string().uuid().required(),
            },
    }),
    fornecedorController.updateSuplier);

    suplierRouter.delete(
    '/:id_fornecedor',
    celebrate({
        [Segments.PARAMS]:{
        id_fornecedor: Joi.string().uuid().required(),
        },
    }),
    fornecedorController.deleteSuplier);


export default suplierRouter;

