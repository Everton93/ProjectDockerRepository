import {container} from "tsyringe";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";
import {SuplierRepository} from "@modules/suplier/infrastructure/typeorm/repositories/SuplierRepository";
import IProductRepository from "@modules/products/Domain/Repository/IProductRepository";
import {ProductsRepository} from "@modules/products/infrastructure/typeorm/repositories/ProductsRepository"

container.registerSingleton<ISuplierRepository>('SuplierRepository', SuplierRepository);
container.registerSingleton<IProductRepository>('ProductsRepository', ProductsRepository);
