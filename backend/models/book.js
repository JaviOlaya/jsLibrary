const {Schema, model}=require('mongoose');

//definition of a table
const bookSchema= new Schema({

    title:{ type: String, required:true},
    author:{ type: String, required:true},
    isbn:{type:String, required:true},
    imagePath:{type: String, required:true},
    create_at:{type: Date, default: Date.now}
});