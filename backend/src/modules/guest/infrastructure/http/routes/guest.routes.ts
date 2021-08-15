import { Router } from "express";
import GuestController from "@modules/guest/infrastructure/http/controllers/GuestController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";

const guestRouter = Router();
const guestController = new GuestController();

guestRouter.use(isAuthenticated);

guestRouter.get("/list", guestController.index);

guestRouter.get(
    "/:id_hospede",
    celebrate({
        [Segments.PARAMS]: {
            id_hospede: Joi.string().uuid().required(),
        },
    }),
    guestController.showGuestById
);

guestRouter.post(
    "/:cpf",
    celebrate({
        [Segments.PARAMS]: {
            cpf: Joi.string().required(),
        },
    }),
    guestController.showGuestByCpf
);


guestRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            idade: Joi.number().required(),
            cpf: Joi.string().required(),
            email: Joi.string().required(),
            contato: Joi.string().required(),
        },
    }),
    guestController.createGuest
);

guestRouter.put(
    "/:id_hospede",
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            idade: Joi.number().required(),
            cpf: Joi.string().required(),
            email: Joi.string().required(),
            contato: Joi.string().required(),
        },
        [Segments.PARAMS]: {
            id_hospede: Joi.string().uuid().required(),
        },
    }),
    guestController.updateGuest
);

export default guestRouter;

