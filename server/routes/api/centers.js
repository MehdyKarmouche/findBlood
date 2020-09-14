var express = require('express');
var router = express.Router();
var Donation = require('../../models/Donation');
var Center = require('../../models/Center');
var verifyCenter = require('../../auth/verifyCenter');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'findbloodorg@gmail.com',
      pass: 'findblood123!'
    }
  });

//see all open donations
router.get('/donations', verifyCenter, function(req,res,next){
    const centerId = req.payload._id;

    Donation.find({isCompleted : false, owner: centerId}).then(donations =>{
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

//
router.post('/forgots',function(req, res, next){
    const email = req.body.email;
    //
    Center.findOne({email:email}).then(center=>{
        if(!center){
            res.status(400).json("account does not exist");
        }
        else{
            const token = jwt.sign({_id:center._id}, process.env.TOKEN_FORGOT_CENTER, {expiresIn:'20m'});
            const data = {
                to: email,
                subject : "Activation of your account",
                html:`<h2>Click on the link to reset your password</h2><p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
                    
            };

            center.updateOne({resetLink:token}, (err, success)=>{
                if(err){
                    res.status(400).json("reset password link error");
                }
                else{
                    transporter.sendMail(data, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                          res.json({message:"email has been sent"})
                        }
                      });
                }
                
            })
        }
    })
    //
    /*var mailOptions = {
        from: 'findbloodorg@gmail.com',
        to: 'mehdi.karmouche@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };*/
      /*transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });*/
})


module.exports = router;