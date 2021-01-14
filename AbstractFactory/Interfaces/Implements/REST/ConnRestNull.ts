import { ConnectionRest } from "../../IConnectionRest";

export class ConnNull implements ConnectionRest{
    getConnectionbByEndpoint(url:string){
        console.log('NULL!');        
    }
}