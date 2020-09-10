var express = require('express');
var router = express.Router();
var Center = require('../../models/Center');
var Donor = require('../../models/Donor');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

router.post('/center',[
    // username must be an email
    check('email').isEmail().withMessage('E-mail invalide')
  ], function(req, res, next){
    Center.findOne({email:req.body.email.toLowerCase()}).then(center =>{
        if(center){
            bcrypt.compare(req.body.password, center.password, (err, isMatch)=>{
                if(err){
                  res.send(err);
                }
                else{
                    if(isMatch){
                      console.log("password match !");
                      
                      const token = jwt.sign({_id : center._id, role:"center", email: center.email}, process.env.TOKEN_SECRET);
                      res.cookie('jwtToken', token, { maxAge: 900000, httpOnly: false });
                      //console.log(token)
                      console.log("logged in")
                      //console.log(res);
                      return res.redirect('/centers/donations')
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
  Donor.findOne({email:req.body.email.toLowerCase()}).then(donor =>{
      if(donor){
          bcrypt.compare(req.body.password, donor.password, (err, isMatch)=>{
              if(err){
                res.send(err);
              }
              else{
                  if(isMatch){
                    console.log("password match !");
                    
                    const token = jwt.sign({_id : donor._id, role:"donor", email: donor.email}, process.env.TOKEN_SECRET);
                    res.cookie('jwtToken', token, { maxAge: 900000, httpOnly: false });
                    //console.log(token)
                    console.log("logged in")
                    //console.log(res);
                    return res.redirect('/donor/donations')
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

module.exports = router;