import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {connect} from './database.js';
import AppRouter from './router.js';
import multer from 'multer';
import path from 'path';
import bodyParser from 'body-parser';

//File storage config

const storageDir = path.join(__dirname, '..', 'storage');
const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, storageDir)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storageConfig });

//end file storage config


const PORT = 3000;
const app = express();
app.server = http.createServer(app);


app.use(morgan('dev'));


app.use(cors({
    exposedHeaders: "*"
}));

app.use(bodyParser.json({
    limit: '50mb'
}));
app.set('root', __dirname);
app.set('storageDir', storageDir);
app.set('upload', upload);

//Connect to database
connect((err, db) => {

    if(err) {
        console.log('An err occured connecting to database');
        throw err;
    }

    app.set('db', db);

    //init routers

    new AppRouter(app);
    
    app.server.listen(process.env.PORT || PORT, () => {
            console.log(`App is running on port ${app.server.address().port}`);
    });

});


export default app;