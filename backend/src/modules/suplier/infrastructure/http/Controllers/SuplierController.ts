import {Request , Response} from 'express';
import CreateSuplierService from '../../../services/CreateSuplierService';
import ShowSupplierService from '../../../services/ShowSuplierService';
import ListSuplierService from '../../../services/ListSuplierService';
import UpdateSuplierService from '../../../services/UpdateSuplierSevice';
import DeleteSuplierService from '../../../services/DeleteSuplierService';


export default class SuplierController{

    public async index (request : Request, response : Response):Promise<Response>
    {
        const listSupliers = new ListSuplierService();
        const suplierList = await listSupliers.execute();

        return response.json(suplierList);
    }

    public async showSuplier (request : Request, response : Response):Promise<Response>
    {
        const {id_fornecedor} = request.params;

        const showSuplierService = new ShowSupplierService();

        const suplier = await showSuplierService.executeforsSearch({id_fornecedor});

        return response.json(suplier);
    }

    public async createSuplier (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, whatsapp} = request.body;

        const createSuplierService = new CreateSuplierService();

        const suplier = await createSuplierService.execute({nome, email, whatsapp});

        return response.json(suplier);
    }

    public async updateSuplier (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, whatsapp} = request.body;
        const {id_fornecedor} = request.params;
        const updateSuplierService = new UpdateSuplierService();

            return response.json(updateSuplierService.execute(
            {
            id_fornecedor,
            nome,
            email,
            whatsapp,
            }));
    }

    public async deleteSuplier (request : Request, response : Response):Promise<Response>
    {
         const {id_fornecedor} = request.params;

        const deleteSuplierService = new DeleteSuplierService();

        await deleteSuplierService.execute({id_fornecedor});

        return response.json({message : 'Fornecedor deletado com sucesso !!'});
    }

}

