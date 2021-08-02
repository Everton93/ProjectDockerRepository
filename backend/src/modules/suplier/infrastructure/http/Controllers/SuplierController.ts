import {Request , Response} from "express";
import { container } from "tsyringe";
import CreateSuplierService from "@modules/suplier/services/CreateSuplierService";
import ShowSupplierService from "@modules/suplier/services/ShowSuplierService";
import ListSuplierService from "@modules/suplier/services/ListSuplierService";
import UpdateSuplierService from "@modules/suplier/services/UpdateSuplierSevice";
import DeleteSuplierService from "@modules/suplier/services/DeleteSuplierService";


export default class SuplierController{

    public async index (response : Response):Promise<Response>
    {
        const listSupliers = container.resolve(ListSuplierService);
        const suplierList = await listSupliers.execute();

        return response.json(suplierList);
    }

    public async showSuplier (request : Request, response : Response):Promise<Response>
    {
        const {id_fornecedor} = request.params;

        const showSuplierService = container.resolve(ShowSupplierService);

        const suplier = await showSuplierService.executeforsSearch({id_fornecedor});

        return response.json(suplier);
    }

    public async createSuplier (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, whatsapp} = request.body;

        const createSuplierService = container.resolve(CreateSuplierService);

        const suplier = await createSuplierService.execute({nome, email, whatsapp});

        return response.json(suplier);
    }

    public async updateSuplier (request : Request, response : Response):Promise<Response>
    {
        const {nome, email, whatsapp} = request.body;
        const {id_fornecedor} = request.params;

        const updateSuplierService = container.resolve(UpdateSuplierService);


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

        const deleteSuplierService = container.resolve(DeleteSuplierService);

        await deleteSuplierService.execute({id_fornecedor});

        return response.json({message : 'Fornecedor deletado com sucesso !!'});
    }

}
