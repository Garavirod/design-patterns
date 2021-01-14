import { TshirtShortSalve } from "./extends/Tshirts";
import { Tshirt } from "./Tshirt";

/* Prototypes */
const tss:Tshirt = new TshirtShortSalve(
    "xs",
    "red",
    "DEADPOOL",
    {'M':'NYLON'}
);

const tls:Tshirt = new TshirtShortSalve(
    "xs",
    "yellow",
    "SPONGE BOB",
    {'M':'NYLON'}
);


/* Clone 40 copies of shortTshirt and LargeTshirt */

let tshirtsList: Array<Tshirt> = [];

for (let index = 0; index < 40; index++) {
    tshirtsList.push(tss.Clone());
    
}

for (let index = 0; index < 40; index++) {
    tshirtsList.push(tls.Clone());
    
}