import { Connection } from './Interfaces/IConnection';
import { ConnFactory } from "./ConnFactory";


const factory: ConnFactory = new ConnFactory();

const _cx1:Connection = factory.getConnection("MYSQL");
const _cx2:Connection = factory.getConnection("ORACLE");
const _cx3:Connection = factory.getConnection("PSQL");

_cx1.connect();
_cx2.connect();
_cx3.connect();