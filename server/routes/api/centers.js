var express = require('express');
var router = express.Router();
var Donation = require('../../models/Donation');
var verifyCenter = require('../../auth/verifyCenter');

//see all open donations
router.get('/donations', verifyCenter, function(req,res,next){
    const centerId = req.payload._id;

    Donation.find({isCompleted : false,owner: centerId}).then(donations =>{
        res.send({donations});
    })
})
//add donation
router.post('/donation', verifyCenter, function(req, res, next){
    const bloodType = req.body.bloodType;
    const importance = req.body.importance;
    const centerId = req.payload._id;
    
    const newDonation = new Donation({
        owner:centerId,
        bloodType,
        importance,
        postedAt: new Date(),
        isCompleted: false,
        peopleInterested: 0
      });
    
      newDonation.save();
      res.json({newDonation});
      res.end();

});

//Donation is completed
router.delete('/donation',verifyCenter, function(req, res, next){
    const donationId = req.body.id;
    const centerId = req.payload._id;
    Donation.findByIdAndUpdate({_id : donationId, owner: centerId}, {isCompleted:true, completedAt : new Date()}).then(donation =>{
        res.json({donation});
    });
})
//update a donation
router.put('/donation', verifyCenter, function(req,res,next){
    const donationId = req.body.id;
    const bloodType = req.body.bloodType;
    const importance = req.body.importance;
    const centerId = req.payload._id;

    Donation.findByIdAndUpdate({_id : donationId, owner: centerId}, {isCompleted:false, bloodType:bloodType, importance:importance, completedAt: new Date()})
    .then(donation =>{
        res.json({donation});
    });
})
module.exports = router;