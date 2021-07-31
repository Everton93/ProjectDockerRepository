import {container} from "tsyringe";
import ISuplierRepository from "@modules/suplier/Domain/Repository/ISuplierRepository";
import {SuplierRepository} from "@modules/suplier/infrastructure/typeorm/repositories/SuplierRepository";


container.registerSingleton<ISuplierRepository>('SuplierRepository', SuplierRepository);
