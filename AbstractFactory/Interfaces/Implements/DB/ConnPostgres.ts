import { Connection } from "../IConnection";


export class ConnPostgreSQL implements Connection{
   
    private host: string = "";
	private puerto:string = "";
	private usuario:string= "";
    private contrasena:string = "";
    
    ConnMysql(){        
        this.host = "localhost";
		this.puerto = "5433";
		this.usuario = "root";
		this.contrasena = "123";
    }

    connect(){
        console.log("POSTGRESQL Connected!");
        
    }

    disconnect(){
        console.log("POSTGRESQL Connected!");
    }

    toString(): string{
        return `${this.host} ${this.puerto} ${this.usuario} ${this.contrasena}`;
    }
}