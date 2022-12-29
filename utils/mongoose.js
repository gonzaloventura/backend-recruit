import { CONNREFUSED } from 'dns'
import {connect, connection, set} from 'mongoose'

const conn = {
    isConnected: false
}

export async function dbConnect(){
    if (conn.isConnected) {
        return;
    }

    set("strictQuery", false);
    const db = await connect(process.env.MONGODB_URL)
    conn.isConnected = db.connections[0].readyState
    // console.log("Conectado a la base de datos: ", db.connection.db.databaseName)
}

// connection.on("connected", () => {
//    console.log("MongoDB conectado correctamente")
// })

connection.on("error", (err) => {
    console.log(err);
})