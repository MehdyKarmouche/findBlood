var express = require('express');
var router = express.Router();
var Donation = require('../../models/Donation');
var Donor = require('../../models/Donor');
var verifyDonor = require('../../auth/verifyDonor');

router.get('/donations', verifyDonor, function(req,res,next){
    Donation.find({isCompleted:false}).then(donations=>{
        res.send({donations});
    })
});
//change blood type
router.put('/profile', verifyDonor, function(req, res, next){
    const donorId = req.payload._id;
    const newCity = req.body.city;
    const newBloodtype = req.body.bloodtype;

    Donor.findByIdAndUpdate({_id:donorId}, {
        bloodtype:newBloodtype,
        city:newCity
    }).then(donor =>{
        res.json({donor});
    });
})

//interested for a donation at a center
router.post('/interested',verifyDonor, function(req, res, next){
    const donorId = req.payload._id;
    const donationId = req.donationId;
    
    

})  


module.exports = router;