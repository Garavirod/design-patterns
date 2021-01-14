import { ConnRestFactory } from './ConnRestFactory';
import { ConnFactoryDB } from './ConnFactoryDB';
import { AbastractFactory } from "./Interfaces/IAbastractFactory";

export class FactoryBuilder {
    private constructor() {
        
    }

    public static  getFactory(typeFactory:string):AbastractFactory{
        switch (typeFactory) {
            case 'DB':                
                return new ConnFactoryDB ();    
            case 'REST':
                return new  ConnRestFactory ();                           
            default:
                return new ConnRestFactory();
        }   
    }
}