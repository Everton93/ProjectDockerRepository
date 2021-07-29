import { Request, Response} from 'express';
import ShowUsersServiceByid from '../../../services/ShowUserById';
import UpdateUsersService from '../../../services/UpdateUsersService';

export default class ProfileController
{
    public async showUserbyId (request : Request, response : Response):Promise<Response>
    {
        const id_usuario = request.user.id;
        const showUserById = new ShowUsersServiceByid();

        const userSearchByid = await showUserById.executeforsSearch({id_usuario});

        return response.json(userSearchByid);
    }

    public async updateUser (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, password, old_password } = request.body;
        const id_usuario = request.user.id;
        const updateUserService = new UpdateUsersService();

        const user = await updateUserService.execute(
            {
            id_usuario,
            nome,
            email,
            password,
            old_password
            });

        return response.json(user);
    }
}
