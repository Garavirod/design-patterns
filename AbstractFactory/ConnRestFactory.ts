import { ConnectionRest } from './Interfaces/IConnectionRest';
import { EmptyConn } from './Interfaces/Implements/DB/ConnEmpty';
import { ConnUsers } from './Interfaces/Implements/REST/ConnRestUsers';
import { ConnAuth } from './Interfaces/Implements/REST/ConnRestAuth';
import { ConnNull } from './Interfaces/Implements/REST/ConnRestNull';
import { AbastractFactory } from './Interfaces/IAbastractFactory';

export class ConnRestFactory implements AbastractFactory{

    getConnDB(motor:string){
        return new EmptyConn();
    }

    getConnRest(area:string):ConnectionRest{
        switch (area) {
            case 'USERS':                
                return new ConnUsers();
            case 'AUTH':
                return new ConnAuth();
            default:
                return new ConnNull();
        }

    }
}


/* 
    ConnectionRest is a Interface so that any class which implements
    that interface will be threated like if it were the same thing.

*/