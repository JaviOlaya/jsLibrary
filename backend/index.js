const express = require('express');

//initializations
const app = express();

//definitioon of variable port
app.set('port',3000);

// Start the server on port 3000
app.listen(app.get('port'), () => {
        console.log('Port 3000 in use', app.get('port'));
})