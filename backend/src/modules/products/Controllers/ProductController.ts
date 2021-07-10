import {Request , Response} from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import ShowProductServiceByName from '../services/ShowProductServiceByName';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductController{

    public async index (request : Request, response : Response):Promise<Response>
    {
        const listProducts = new ListProductService();
        const productList = await listProducts.execute();

        return response.json(productList);
    }

    public async showProduct (request : Request, response : Response):Promise<Response>
    {
        const {id_produto} = request.params;

        const showProductService = new ShowProductService();

        const productSearch = await showProductService.executeforsSearch({id_produto});

        return response.json(productSearch);
    }

    public async showProductByName (request : Request, response : Response):Promise<Response>
    {
        const {nome} = request.params;

        const showProductByname = new ShowProductServiceByName();

        const productSearchName = await showProductByname.execute({nome});

        return response.json(productSearchName);
    }

    public async createProduct (request : Request, response : Response):Promise<Response>
    {
        const {nome, descricao, preco, quantidade} = request.body;

        const createProductService = new CreateProductService();

        const productCreate = await createProductService.execute({
            nome,
            descricao,
            preco,
            quantidade
        });

        return response.json(productCreate);
    }

    public async updateProduct (request : Request, response : Response):Promise<Response>
    {
        const {nome,descricao ,preco,quantidade} =request.body;
        const {id_produto} = request.params;
        const updateProductService = new UpdateProductService();

            return response.json(updateProductService.execute(
            {
            id_produto,
            nome,
            descricao,
            preco,
            quantidade}));
    }

    public async deleteProduct (request : Request, response : Response):Promise<Response>
    {
        const {id_produto} = request.params;

        const deleteProductService = new DeleteProductService();

        await deleteProductService.execute({id_produto});

        return response.json({message : 'Produto deletado com sucesso !!'});
    }
}


