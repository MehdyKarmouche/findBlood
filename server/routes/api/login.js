var express = require('express');
var router = express.Router();
var Center = require('../../models/Center');
var Donor = require('../../models/Donor');
const jwt = require('jsonwebtoken');
const { check} = require('express-validator');
const bcrypt = require('bcryptjs');

router.post('/center',[
    // username must be an email
    check('email').isEmail().withMessage('E-mail invalide')
  ], function(req, res, next){
    console.log(req.body)
    Center.findOne({email:req.body.user.email.toLowerCase()}).then(center =>{
        if(center){
            bcrypt.compare(req.body.user.password, center.password, (err, isMatch)=>{
                if(err){
                  res.send(err);
                }
                else{
                    if(isMatch){
                      console.log("password match !");
                      
                      const token = jwt.sign({_id : center._id, role:"center", email: center.email}, process.env.TOKEN_CENTER);
                      res.cookie('jwtToken', token, { maxAge: 900000, httpOnly: false });
                      //console.log(token)
                      console.log("logged in")
                      //console.log(res);
                      
                      return res.status(200).json("you can redirect")
                    }
                    else{
                      return res.status(403).json("incorrect password or email");
                    }
                }
            });
        }
        else{
          return res.status(403).json("this user does not exist");
        }
    })
});

// login for donors
router.post('/donor',[
  // username must be an email
  check('email').isEmail().withMessage('E-mail invalide')
], function(req, res, next){
  console.log(req.body)
  Donor.findOne({email:req.body.user.email.toLowerCase()}).then(donor =>{
      if(donor){

          bcrypt.compare(req.body.user.password, donor.password, (err, isMatch)=>{
              if(err){
                res.send(err);
              }
              else{
                  if(isMatch){
                    console.log("password match !");
                    
                    const token = jwt.sign({_id : donor._id, role:"donor", email: donor.email}, process.env.TOKEN_DONOR);
                    res.cookie('jwtToken', token, { maxAge: 900000, httpOnly: false });
                    //console.log(token)
                    console.log("logged in")
                    //console.log(res);
                    return res.redirect('/donor/donations')
                  }
                  else{
                    console.log("crid not correct")
                    return res.status(403).json("incorrect password or email");
                  }
              }
          });
      }
      else{
        console.log("does not exsist")
        return res.status(403).json("this user does not exist");
      }
  })
});
router.post('/donor/resetpassword',function(req,res,next){
  const {resetLink, newPassword} = req.body;
  if(resetLink){
    jwt.verify(resetLink, process.env.TOKEN_FORGOT_DONOR, function(error, decodedData){
      if(error){
        res.status(401).json({error:"Incorrect token"})
      }
      Donor.findOne({resetLink}, function(err, donor){
        if(err || !donor)
          res.status(401).json({error:"Can't find donor with that token"})

       
        /*donor.password = newPassword;
        donor.save();
        console.log(donor);
        res.json({message:"Password has been changed"});*/
        //
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) throw err;
            donor.password = hash;
            donor
              .save()
              .then(donor => {
                console.log("password has been changed")
                console.log(donor)
                res.json("Password has been changed")
                //res.redirect('/centers/donations');
              })
              .catch(err => console.log(err));
          });
        });
        //

      })
    })
  }
  else{
    res.status(401).json({error: "Authentication problem"})

  }

})

//
router.post('/center/resetpassword',function(req,res,next){
  const {resetLink, newPassword} = req.body;
  if(resetLink){
    jwt.verify(resetLink, process.env.TOKEN_FORGOT_CENTER, function(error, decodedData){
      if(error){
        res.status(401).json({error:"Incorrect token"})
      }
      Center.findOne({resetLink}, function(err, center){
        if(err || !center)
          res.status(401).json({error:"Can't find center with that token"})

       
        /*donor.password = newPassword;
        donor.save();
        console.log(donor);
        res.json({message:"Password has been changed"});*/
        //
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) throw err;
            center.password = hash;
            center
              .save()
              .then(center => {
                console.log("password has been changed")
                console.log(center)
                res.json("Password has been changed")
                //res.redirect('/centers/donations');
              })
              .catch(err => console.log(err));
          });
        });
        //

      })
    })
  }
  else{
    res.status(401).json({error: "Authentication problem"})

  }

})

//


module.exports = router;