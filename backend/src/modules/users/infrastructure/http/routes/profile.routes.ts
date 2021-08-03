import isAuthenticated from "@shared/infrastructure/http/middlewares/isAuthenticated";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import ProfileController from "../Controllers/ProfileController";

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.get("/",profileController.showUserbyId);

profileRouter.put(
    "/",
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            old_password: Joi.string(),
            password: Joi.string().optional(),
            password_confirmation: Joi.string()
                .valid(Joi.ref("password"))
                .when("password", {
                    is: Joi.exist(),
                    then: Joi.required(),
                }),
        },
    }),
    profileController.updateUser
);

export default profileRouter;
