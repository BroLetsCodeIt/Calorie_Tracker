import express from 'express';
import web from './routes/web.js';
import connectDB from './db/connectDB.js';
import {join} from 'path'
import dotenv from 'dotenv'

dotenv.config({
    path : './data/config.env'
})

const app = express();
const PORT = process.env.PORT || 3000 ;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

//set the template engine
app.set('view engine' , 'ejs');

//database connection
connectDB(DATABASE_URL);

//url encoded middleware
app.use(express.urlencoded({extended:false}));

//load the routes
app.use('/',web)

//static files
app.use(express.static(join(process.cwd() , 'public')));
app.use('/edit',express.static(join(process.cwd() , 'public')));

app.listen(PORT ,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
})