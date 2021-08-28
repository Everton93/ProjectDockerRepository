import {Request , Response} from "express";
import { container } from "tsyringe";
import CreateUsersService from "@modules/users/services/CreateUserService";
import ShowUsersServiceByEmail from "@modules/users/services/ShowUserServiceByEmail";
import ListUsersService from "@modules/users/services/ListUsersService";
import {classToClass} from "class-transformer"


export default class UsersController{

    public async index (response : Response):Promise<Response>
    {

        const listUsers = container.resolve(ListUsersService);
        const userList = await listUsers.executeListUsers();

        return response.json(classToClass(userList));
    }


    public async showUserbyEmail (request : Request, response : Response):Promise<Response>
    {
        const {email} = request.params;

        const showUserByEmail = container.resolve(ShowUsersServiceByEmail);

        const userSearchByEmail = await showUserByEmail.executeSearchByEmail({email});

        return response.json(classToClass(userSearchByEmail));
    }

    public async createUser (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, password} = request.body;

        const createUserService = container.resolve(CreateUsersService);

        const userCreate = await createUserService.executeCreateUser({nome, email, password});

        return response.json(classToClass(userCreate));
    }
}

