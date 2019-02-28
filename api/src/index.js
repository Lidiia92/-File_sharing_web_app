import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {connect} from './database.js';

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

connect((err, db) => {

    if(err) {
        console.log('An err occured connecting to database');
        throw err;
    }

    app.set('db', db);
    
    app.server.listen(process.env.PORT || PORT, () => {
            console.log(`App is running on port ${app.server.address().port}`);
    });

});


export default app;