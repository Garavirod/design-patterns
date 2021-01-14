import { Connection } from "../IConnection";

export class ConnMysql implements Connection{
   
    private host: string = "";
	private puerto:string = "";
	private usuario:string= "";
    private contrasena:string = "";
    
    ConnMysql(){        
        this.host = "localhost";
		this.puerto = "3306";
		this.usuario = "root";
		this.contrasena = "123";
    }

    connect(){
        console.log("MYSQL Connected!");
        
    }

    disconnect(){
        console.log("MYSQL Connected!");
    }

    toString(): string{
        return `${this.host} ${this.puerto} ${this.usuario} ${this.contrasena}`;
    }
}