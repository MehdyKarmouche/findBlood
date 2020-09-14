const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const donorSchema = new Schema({
    city: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    bloodType:{type: String, required:false},
    resetLink: {data:String, default: ""}
   
});

module.exports=mongoose.model('Donor', donorSchema);