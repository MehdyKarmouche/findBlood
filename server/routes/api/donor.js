var express = require('express');
var router = express.Router();
var Donation = require('../../models/Donation');
var Donor = require('../../models/Donor');
var verifyDonor = require('../../auth/verifyDonor');
const { getMaxListeners } = require('../../app');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

var transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

router.get('/donations', /*verifyDonor ,*/ function(req,res,next){
    Donation.find({isCompleted:false}).then(donations=>{
        res.send(donations);
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
    const donationId = req.body.donationId;

    Donation.findById({_id:donationId}).then(donation=>{
        let interested = {
            id : donorId,
            actionDate: new Date() 
        }
        donation.peopleInterested.push(interested);
        donation.save();
        res.json(donation)
    })
    // 5f53e0cb11b60a6b400d2830
})  



router.post('/forgots',function(req, res, next){
    const email = req.body.user.email;
    //
    Donor.findOne({email:email}).then(donor=>{
        if(!donor){
            res.status(400).json("account does not exist");
        }
        else{
            const token = jwt.sign({_id:donor._id}, process.env.TOKEN_FORGOT_DONOR, {expiresIn:'20m'});
            const data = {
                to: email,
                subject : "Activation of your account",
                html:`<h2>Click on the link to reset your password</h2><p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
                    
            };

            donor.updateOne({resetLink:token}, (err, success)=>{
                if(err){
                    res.status(400).json("reset password link error");
                }
                else{
                    transporter.sendMail(data, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
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