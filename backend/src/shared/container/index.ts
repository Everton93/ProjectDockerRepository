import {container} from "tsyringe";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";
import {SuplierRepository} from "@modules/suplier/infrastructure/typeorm/repositories/SuplierRepository";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import {ProductsRepository} from "@modules/products/infrastructure/typeorm/repositories/ProductsRepository"
import IUserRepository from "@modules/users/Domain/Repository/IUserRepository";
import { UsersRepository } from "@modules/users/infrastructure/typeorm/repositories/UsersRepository";
import IUserTokenRepository from "@modules/users/Domain/Repository/IUserTokenRepository";
import { UsersTokenRepository } from "@modules/users/infrastructure/typeorm/repositories/UsersTokenRepository";
import IGuestRepository from "@modules/guest/Domain/Repository/IGuestRepository";
import {GuestRepository}  from "@modules/guest/infrastructure/typeorm/Repository/GuestRepository";
import IRoomsRepository from "@modules/room/Domain/Repository/IRoomsRepository";
import RoomsRepository from "@modules/room/infrastructure/typeorm/Repository/RoomsRepository";
import IReserveRepository from "@modules/room/Domain/Repository/IReserveRepository";
import ReserveRepository from "@modules/room/infrastructure/typeorm/Repository/ReserveRepository"
import IServiceRoomRepository from "@modules/room/Domain/Repository/IServiceRoomRepository";
import ServiceRoomRepository from "@modules/room/infrastructure/typeorm/Repository/ServiceRoomRepository"
import ICheckOutRepository from "@modules/room/Domain/Repository/ICheckOutRepository";
import CheckOutRepository from "@modules/room/infrastructure/typeorm/Repository/CheckOutRepository"


container.registerSingleton<ISuplierRepository>('SuplierRepository', SuplierRepository);
container.registerSingleton<IProductRepository>('ProductsRepository', ProductsRepository);
container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IUserTokenRepository>('UsersTokenRepository', UsersTokenRepository);
container.registerSingleton<IGuestRepository>('GuestRepository', GuestRepository);
container.registerSingleton<IRoomsRepository>('RoomsRepository', RoomsRepository);
container.registerSingleton<IReserveRepository>('ReserveRepository', ReserveRepository);
container.registerSingleton<IServiceRoomRepository>('ServiceRoomRepository', ServiceRoomRepository);
container.registerSingleton<ICheckOutRepository>('CheckOutRepository', CheckOutRepository);