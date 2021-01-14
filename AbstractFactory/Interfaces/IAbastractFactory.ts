import { ConnectionDB } from "./IConnectionDB";
import { ConnectionRest } from "./IConnectionRest";

export  interface AbastractFactory{
    getConnDB(motor:string): ConnectionDB;
    getConnRest(area:string): ConnectionRest;
}