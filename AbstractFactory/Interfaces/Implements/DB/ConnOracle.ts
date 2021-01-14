import { Connection } from "../IConnection";

export class ConnOracle implements Connection{
   
    private host: string = "";
	private puerto:string = "";
	private usuario:string= "";
    private contrasena:string = "";
    
    ConnOracle(){        
        this.host = "localhost";
		this.puerto = "1521";
		this.usuario = "root";
		this.contrasena = "123";
    }

    connect(){
        console.log("ORACLE Connected!");
        
    }

    disconnect(){
        console.log("ORACLE Connected!");
    }

    toString(): string{
        return `${this.host} ${this.puerto} ${this.usuario} ${this.contrasena}`;
    }
}