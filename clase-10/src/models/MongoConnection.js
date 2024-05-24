import config from '../../config.js'
import { MongoClient } from "mongodb"

class MongoConnection {
    static client = null
    static db = null

    static connect = async () => {
        this.client = new MongoClient(
            config.DBSTR, {
                // useNewUrlParser: true
            }
        )

        await this.client.connect()
        console.log('Base de datos conectada! ')

        //FIX: indicar la base con la que vamos a trabajar
        this.db = this.client.db(config.BASE)
    }

}

export default MongoConnection