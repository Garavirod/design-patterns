import { Connection } from "../IConnection";

export class EmptyConn implements Connection{
    connect(){
        console.log('Provider was not soecified');
            
    }

    disconnect(){
        console.log('Provider was not soecified');
        
    }
}