const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const centerSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {
        city: String,
        district: {type: String},
        street: {type: String},
        zipcode: {type:String}
    },
    phone: {type: String, required: true},
    inNeed: {type:Boolean},
    resetLink: {data:String, default: ""},
    isVerified: {type: Boolean}

});

module.exports=mongoose.model('Center', centerSchema);