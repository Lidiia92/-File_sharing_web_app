import {MongoClient} from 'mongodb';

const CONNECTION_URL = "mongodb://Lidiia92:<krasotka-7>@file-sharing-app-shard-00-00-16hdv.mongodb.net:27017,file-sharing-app-shard-00-01-16hdv.mongodb.net:27017,file-sharing-app-shard-00-02-16hdv.mongodb.net:27017/test?ssl=true&replicaSet=file-sharing-app-shard-0&authSource=admin&retryWrites=true";

const url = 'mongodb://localhost:27017/fileapp';

export const connect = (cb) => {
    MongoClient.connect(CONNECTION_URL, (err, db) => {
        return cb(err, db);
    });
}


