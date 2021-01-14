import { ConnectionRest } from "../../IConnectionRest";

export class ConnAuth implements ConnectionRest{
    getConnectionbByEndpoint(url:string){
        console.log('API REST Auth connected!');        
    }
}