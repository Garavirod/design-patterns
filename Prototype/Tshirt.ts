export abstract class Tshirt{
    private name:string = "";
    private size:string = "";
    private color:string = "";
    private slave:string = "";
    private stiker:string = "";
    private material:Object = {};

    constructor(name:string,size:string, color:string, slave:string, stiker:string, material:Object){
        this.color=color;
        this.material=material;
        this.name=name;
        this.size=size;
        this.slave=slave;
        this.stiker=stiker;        
    }


    public abstract Clone() : Tshirt;

    /* GETTERS */

    
    public get getColor() : string {
        return this.color;
    }

    
    public get getSize() : string {
        return this.size;
    }

    
    public get getMaterial() : Object {
        return this.material;
    }


    
    public get getName() : string {
        return this.name;
    }

    
    public get getSlave() : string {
        return this.slave;
    }

    
    public get getStiker() : string {
        return this.stiker
    }

    /* SETTERS */
    
    public set setColor(color:string){
         this.color = color;
    }

    
    public set setSize(size:string) {
         this.size = size;
    }

    
    public set setMaterial(material:Object){
         this.material = material;
    }

    
    public set setName(name:string){
         this.name = name;
    }

    
    public set setSlave(slave:string){
         this.slave=slave;
    }

    
    public set setStiker(stiker:string){
         this.stiker=stiker;
    }
    
    
    
    
}