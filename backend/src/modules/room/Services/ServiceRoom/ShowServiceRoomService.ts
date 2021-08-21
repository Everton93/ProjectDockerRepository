import IServiceRoom from "@modules/room/Domain/Models/ServiceRoom/IServiceRoom";
import IShowServiceById from "@modules/room/Domain/Models/ServiceRoom/IShowServiceById";
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import AppError from "@shared/errors/error";
import { inject, injectable } from "tsyringe";

@injectable()
export default class ShowServiceRoomService
{

    constructor(
        @inject('ServiceRoomRepository')
        private serviceRoomRepository : IServiceRoomRepository
         ){}

    public async executeforsSearch ({ id_servico }: IShowServiceById): Promise<IServiceRoom | undefined>{

        const servico = await this.serviceRoomRepository.findById(id_servico);

        if(!servico)  throw new AppError('Fornecedor nao encontrado !!');

        return servico;
    }

}
