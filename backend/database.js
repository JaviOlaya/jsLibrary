const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true 
})
.then(db => console.log('MONGO in use'))
.catch(err => console.error(err));