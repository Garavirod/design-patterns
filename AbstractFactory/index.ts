import { FactoryBuilder } from './FactoryBuilder';
import { AbastractFactory } from './Interfaces/IAbastractFactory';


// Connection by DB

const factoryDB: AbastractFactory = FactoryBuilder.getFactory('DB');
factoryDB.getConnDB('MSQL');

/* Connection by REST */

const factoryRest: AbastractFactory =  FactoryBuilder.getFactory('REST');
factoryRest.getConnRest('USERS');




