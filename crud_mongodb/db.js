const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true };

const state = {
    db : null
};

const connect = (cb)=> {
    if(state.db)
    cb();
    else {
        mongoClient.connect(url, mongoOptions, (err, client)=> {
            if(err)
            cb(err)
            else{ 
                state.db = client.db(dbname);
                cb();
            }
        })
    }
}
const getPrimaryKey = (__id)=>{
    return ObjectID
}
const getDB = ()=> {
    return state.db;
}
module.exports = {getDB, connect, getPrimaryKey};
