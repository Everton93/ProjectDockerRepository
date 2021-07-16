import {Request , Response} from 'express';
import CreateUsersService from '../services/CreateUserService';
import ShowUsersServiceByEmail from '../services/ShowUserServiceByEmail';
import ShowUsersServiceByid from '../services/ShowUserById';
import ListUsersService from '../services/ListUsersService';
import UpdateUsersService from '../services/UpdateUsersService';



export default class UsersController{

    public async index (request : Request, response : Response):Promise<Response>
    {
        const listUsers = new ListUsersService();
        const userList = await listUsers.execute();

        return response.json(userList);
    }

    public async showUserbyId (request : Request, response : Response):Promise<Response>
    {
        const {id_usuario} = request.params;

        const showUserById = new ShowUsersServiceByid();

        const userSearchByid = await showUserById.executeforsSearch({id_usuario});

        return response.json(userSearchByid);
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

    public async updateUser (request : Request, response : Response):Promise<Response>
    {
        const {nome, email,  password} = request.body;
        const {id_usuario} = request.params;
        const updateUserService = new UpdateUsersService();

        const user = await updateUserService.execute(
            {
            id_usuario,
            nome,
            email,
            password,
            });


        return response.json(user);
    }

}

