import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import IShowRoomByNumber from "@modules/room/Domain/Models/Room/IShowRoomByNumber";
import ICreateServiceRoom from "@modules/room/Domain/Models/ServiceRoom/ICreateServiceRoom";
import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import RedisCache from "@shared/cache/redisCache";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe/dist/typings/decorators";
@injectable()
export default class CreateServiceRoomService {
    constructor(
        @inject("ServiceRoomRepository")
        private serviceRoomRepository: IServiceRoomRepository,
        private productRepository: IProductRepository,
        private roomRepository: IRoomsRepository
    ) {}

    public async executeCreate(
            produto_id : string,
            quantidade : number,
            valor: number,
            {numero_quarto} : IShowRoomByNumber
        ): Promise<IServiceRoom>
    {

        const product = await this.productRepository.findById(produto_id);

        if (!product) throw new AppError("Produto não encontrado !!");

        const room = await this.roomRepository.findByNumber(numero_quarto);

        if (!room) throw new AppError("Quarto não encontrado !!");

        valor = product.preco * quantidade;

        const redisCache = new RedisCache();

        await redisCache.invalidate("api_pousada_SERVICEROOM_LIST");

        const service = await this.serviceRoomRepository.create({
            quarto_id: room.id_quarto,
            produto_id,
            quantidade,
            valor,
        });

        return service;
    }
}
