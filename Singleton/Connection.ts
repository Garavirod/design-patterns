class Connection{
    private static instance:Connection;

    private constructor(){

    };

    static getInstance(): Connection{
        if(this.instance === null){
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }


    connect():void{
        console.log("BDD connnect");
        
    }


    disconnect():void{
        console.log("BDD disconnect");
        
    }
}

export = Connection;