require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require ('path');
//initializations
const app = express();
require('./database');

//definitioon of variable port
app.set('port',3000);

//Definition of Middleware
app.use(morgan('dev'));
const storage = multer.diskStorage({
        destination: path.join(__dirname, 'public/uploads'),
        filename(req, file, cb){
                cb(null, new Date().get.Time()+ path.extname(file.originalname));

        }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/books', require( './routes/books'));

//Statics Files
app.use(express.static(path.join(__dirname, './public')));

// Start the server on port 3000
app.listen(app.get('port'), () => {
        console.log('Port 3000 in use', app.get('port'));
})