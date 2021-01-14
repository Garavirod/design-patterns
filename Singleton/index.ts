import Connection from "./Connection";


const conn:Connection = Connection.getInstance();
conn.connect();
conn.disconnect();

