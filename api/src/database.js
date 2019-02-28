import {MongoClient} from 'mongodb';

const url = 'mongodb://localhost:27017/fileapp';

export const connect = (cb) => {
    MongoClient.connect(url, (err, db) => {
        return cb(err, db);
    });
}
