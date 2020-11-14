var express = require('express');
var router = express.Router();
var Donation = require('../../models/Donation');
var Center = require('../../models/Center');
var verifyCenter = require('../../auth/verifyCenter');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

//see all open donations
router.get('/donations', /*verifyCenter,*/ function(req,res,next){
    //const centerId = req.payload._id;
    console.log("ID: ")
    
    Donation.find({/*, owner: centerId*/}).then(donations =>{
        res.send(donations);
        console.log(donations)
    })
})
//add donation
router.post('/donation', /*verifyCenter,*/ function(req, res, next){
    const bloodType = req.body.donation.bloodType;
    const importance = req.body.donation.importance;
    console.log("HIT")
    const centerId = "5f53cf1f3e0f4c4bb03f45fe"
    
    const newDonation = new Donation({
        //owner:centerId,
        bloodType,
        importance,
        postedAt: new Date(),
        isCompleted: false,
        peopleInterested: 0
      });
    
      newDonation.save();
      console.log("donation added")
      res.json({newDonation});
      res.end();

});

//Donation is completed
/*router.delete('/donation',verifyCenter, function(req, res, next){
    const donationId = req.body.id;
    const centerId = req.payload._id;
    Donation.findByIdAndUpdate({_id : donationId, owner: centerId}, {isCompleted:true, completedAt : new Date()}).then(donation =>{
        res.json({donation});
    });
})*/
//update a donation
router.put('/donation', /*verifyCenter,*/ function(req,res,next){
    const donationId = req.body.donation.id;
    const bloodType = req.body.donation.bloodType;
    const importance = req.body.donation.importance;
    const isCompleted = req.body.donation.isCompleted
    //const centerId = req.payload._id;
    console.log(req.body.donation)

    Donation.findByIdAndUpdate({_id : donationId/*, owner: centerId*/}, {isCompleted:false, bloodType:bloodType, importance:importance,isCompleted:isCompleted, completedAt: new Date()})
    .then(donation =>{
        res.json({donation});
    });
})

router.delete('/donation', function(req, res, next){
  const idToDelete = req.body.donation.id;
  console.log(idToDelete)
  console.log("DELETE HIT")

  Donation.deleteOne({ _id: idToDelete }, function (err) {
    if (err) return handleError(err);
      Donation.find({}).then(donations => {
        res.json(donations)
      })
  });
})

//
router.post('/forgots',function(req, res, next){
    const email = req.body.user.email;
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