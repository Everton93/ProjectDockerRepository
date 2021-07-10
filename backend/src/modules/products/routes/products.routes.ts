import {Router} from 'express';
import ProductController from '../Controllers/ProductController';
import { celebrate, Joi, Segments } from 'celebrate';

const productsRouter = Router();
const produtoController = new ProductController();

productsRouter.get('/list',produtoController.index);

productsRouter.get(
    '/:id_produto',
    celebrate({
        [Segments.PARAMS]:{
        id_produto: Joi.string().uuid().required(),
        },
    }),
produtoController.showProduct);

productsRouter.post(
    '/:nome',
    celebrate({
        [Segments.PARAMS]:{
        nome: Joi.string().required(),
        },
    }),
    produtoController.showProductByName);

productsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]:{
        nome: Joi.string().required(),
        descricao : Joi.string().required(),
        preco: Joi.number().precision(2).required(),
        quantidade: Joi.number().required()
        },
    }),
    produtoController.createProduct);

productsRouter.put(
    '/:id_produto',
    celebrate({
        [Segments.BODY]:{
        nome: Joi.string().required(),
        descricao : Joi.string().required(),
        preco: Joi.number().precision(2).required(),
        quantidade: Joi.number().required()
        },
        [Segments.PARAMS]:{
            id_produto: Joi.string().uuid().required(),
            },
    }),
    produtoController.updateProduct);

productsRouter.delete(
    '/:id_produto',
    celebrate({
        [Segments.PARAMS]:{
        id_produto: Joi.string().uuid().required(),
        },
    }),
    produtoController.deleteProduct);


export default productsRouter;

