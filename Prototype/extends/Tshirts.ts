import { Tshirt } from "../Tshirt";

export class TshirtShortSalve extends Tshirt {

    constructor(
        size:string, 
        color:string,
        stiker:string, 
        material:Object
    ){                        
        super("Thisrt1",size,color,"short",stiker,material);
    }

    Clone():Tshirt{
        return new TshirtShortSalve(
            this.getSize,
            this.getColor,
            this.getStiker,
            this.getMaterial);
    }
}


export class TshirtLargeSalve extends Tshirt {

    constructor(
        size:string, 
        color:string,
        stiker:string, 
        material:Object
    ){                        
        super("Thisrt2",size,color,"Large",stiker,material);
    }

    Clone():Tshirt{
        return new TshirtLargeSalve(
            this.getSize,
            this.getColor,
            this.getStiker,
            this.getMaterial);
    }
}