import { ConnectionRest } from "../../IConnectionRest";

export class ConnUsers implements ConnectionRest{
    getConnectionbByEndpoint(url:string){
        console.log('API REST Users connected!');        
    }
}