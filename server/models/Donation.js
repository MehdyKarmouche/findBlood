const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const donationSchema = new Schema({
    //center of this donation
    owner: {type: Schema.ObjectId, ref:'Center'},
    bloodType: {type: String, required: true},
    importance: {type: String, required: true},
    postedAt: {type: Date, required: true},
    isCompleted: {type: Boolean, required: true},
    completedAt: {type:Date},
    city: {type: String},
    peopleInterested: {type: String}
});

module.exports=mongoose.model('Donation', donationSchema);