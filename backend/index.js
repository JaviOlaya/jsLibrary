const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
//initializations
const app = express();

//definitioon of variable port
app.set('port',3000);

//Definition of Middleware
app.use(morgan());

// Start the server on port 3000
app.listen(app.get('port'), () => {
        console.log('Port 3000 in use', app.get('port'));
})