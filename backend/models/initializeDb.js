const db = require('./dbConnect');
const data = require('../data/data')

class initializeDb{
    static dbInitialization = async ()=>{
        const dbConnect = new db(data.getDbData());
        dbConnect.connectToDb();

        let sql = `CREATE TABLE users (id SERIAL PRIMARY KEY, firstName VARCHAR, lastName VARCHAR,phoneNumber VARCHAR, email VARCHAR, password VARCHAR, isEmailConfirmed SMALLINT, gender VARCHAR, userRole VARCHAR, isActive SMALLINT, regtime timestamp, timeslog int, lastlog timestamp);`;
        await dbConnect.queryDb(sql);

        dbConnect.closeConnection()
        return "Table created successfully";
    }
    static alterDb = async () =>{

    }
}

module.exports = initializeDb;