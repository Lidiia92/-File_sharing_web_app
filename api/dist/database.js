'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = undefined;

var _mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/fileapp';

var connect = exports.connect = function connect(cb) {
    _mongodb.MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        return cb(err, db);
    });
};
//# sourceMappingURL=database.js.map