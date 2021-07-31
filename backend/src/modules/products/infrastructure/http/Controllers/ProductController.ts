import {Request , Response} from 'express';
import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService'
import DeleteProductService from '@modules/products/services/DeleteProductService';
import ListProductService from '@modules/products/services/ListProductService';
import ShowProductService from '@modules/products/services/ShowProductService';
import ShowProductServiceByName from '@modules/products/services/ShowProductServiceByName';
import UpdateProductService from '@modules/products/services/UpdateProductService';

export default class ProductController{

    public async index (request : Request, response : Response):Promise<Response>
    {
        const listProducts = container.resolve(ListProductService);
        const productList = await listProducts.listAllProducts();

        return response.json(productList);
    }

    public async showProduct (request : Request, response : Response):Promise<Response>
    {
        const {id_produto} = request.params;

        const showProductService = container.resolve(ShowProductService);

        const productSearch = await showProductService.SearchProductById({id_produto});

        return response.json(productSearch);
    }

    public async showProductByName (request : Request, response : Response):Promise<Response>
    {
        const {nome} = request.params;

        const showProductByname = container.resolve(ShowProductServiceByName);

        const productSearchName = await showProductByname.executeSearchByName({nome});

        return response.json(productSearchName);
    }

    public async createProduct (request : Request, response : Response):Promise<Response>
    {
        const {nome, descricao, preco, quantidade} = request.body;

        const createProductService = container.resolve(CreateProductService);

        const productCreate = await createProductService.executeCreate({
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
        const updateProductService = container.resolve(UpdateProductService);

            return response.json(updateProductService.executeUpdate(
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

        const deleteProductService = container.resolve(DeleteProductService);

        await deleteProductService.executeDelete({id_produto});

        return response.json({message : 'Produto deletado com sucesso !!'});
    }
}


