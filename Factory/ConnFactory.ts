import { ConnPostgreSQL } from './Interfaces/Implements/ConnPostgres';
import { ConnOracle } from './Interfaces/Implements/ConnOracle';
import { ConnMysql } from './Interfaces/Implements/ConnMysql';
import { Connection } from './Interfaces/IConnection';
import { EmptyConn } from './Interfaces/Implements/ConnEmpty';
export class ConnFactory{
    /**
     * name
     */
    public getConnection(motor:string): Connection {
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
}
