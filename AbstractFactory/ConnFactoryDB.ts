import { ConnNull } from './Interfaces/Implements/REST/ConnRestNull';
import { EmptyConn } from './Interfaces/Implements/DB/ConnEmpty';
import { ConnOracle } from './Interfaces/Implements/DB/ConnOracle';
import { ConnPostgreSQL } from '../Factory/Interfaces/Implements/ConnPostgres';
import { ConnectionDB } from './Interfaces/IConnectionDB';
import { ConnMysql } from './Interfaces/Implements/DB/ConnMysql';
import { AbastractFactory } from './Interfaces/IAbastractFactory';

export class ConnFactoryDB implements AbastractFactory{
    /**
     * name
     */
    
    public getConnDB (motor:string): ConnectionDB {
        switch (motor) {
            case "MYSQL":
                return new ConnMysql();
                
            case "ORACLE":
                return new ConnOracle();
            
            case "PSQL":
                return new ConnPostgreSQL();            
            default:
                return new EmptyConn();
        }        
        
    }

    getConnRest(area:string){
        return new ConnNull;
    }
}
