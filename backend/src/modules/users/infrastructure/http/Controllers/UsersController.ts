import {Request , Response} from 'express';
import CreateUsersService from '../../../services/CreateUserService';
import ShowUsersServiceByEmail from '../../../services/ShowUserServiceByEmail';
import ListUsersService from '../../../services/ListUsersService';



export default class UsersController{

    public async index (request : Request, response : Response):Promise<Response>
    {

        const listUsers = new ListUsersService();
        const userList = await listUsers.execute();

        return response.json(userList);
    }


    public async showUserbyEmail (request : Request, response : Response):Promise<Response>
    {
        const {email} = request.params;

        const showUserByEmail = new ShowUsersServiceByEmail();

        const userSearchByEmail = await showUserByEmail.executeforsSearch({email});

        return response.json(userSearchByEmail);
    }

    public async createUser (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, password} = request.body;

        const createUserService = new CreateUsersService();

        const userCreate = await createUserService.execute({nome, email, password});

        return response.json(userCreate);
    }
}

