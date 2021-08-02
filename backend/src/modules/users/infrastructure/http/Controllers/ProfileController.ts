import { Request, Response} from 'express';
import { container } from "tsyringe";
import ShowUsersServiceByid from '../../../services/ShowUserById';
import UpdateUsersService from '../../../services/UpdateUsersService';
export default class ProfileController
{
    public async showUserbyId (request : Request, response : Response):Promise<Response>
    {
        const id_usuario = request.user.id;
        const showUserById = container.resolve(ShowUsersServiceByid);

        const userSearchByid = await showUserById.executeSearchById({id_usuario});

        return response.json(userSearchByid);
    }

    public async updateUser (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, password, old_password } = request.body;
        const id_usuario = request.user.id;
        const updateUserService = container.resolve(UpdateUsersService);
        const user = await updateUserService.executeUpdateUser(
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
