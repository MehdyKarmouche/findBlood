var express = require('express');
var router = express.Router();
var Center = require('../../models/Center');
var Donor = require('../../models/Donor');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

router.post('/center',[
    check('email').isEmail()
],function(req,res,next){
    let { email, password, password2, city, district, street, zipcode, phone } = req.body;
    
    email = email.toLowerCase();
    console.log(email);
    console.log(city);
    console.log(street)
    let errors = [];
    if ( !email || !password || !password2 || !city || !district || !street || !zipcode || !phone) {
        errors.push({ msg: 'Please enter all fields' });
      }
    
      if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
      }
    
      if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
      }
    
      if (errors.length > 0) {
        res.send(errors)
      } else {
        Center.findOne({ email: email }).then(center => {
          if (center) {
            errors.push({ msg: 'Email already exists' });
            res.send(errors)
          } else {
            let newAddress = {
                city : city,
                district: district,
                street: street,
                zipcode: zipcode,
            }
            const newCenter = new Center({
              email,
              password,
              address:newAddress,
              phone: phone,
              inNeed: false

            });
    
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newCenter.password, salt, (err, hash) => {
                if (err) throw err;
                newCenter.password = hash;
                newCenter
                  .save()
                  .then(center => {
                    console.log("you signed up")
                    res.json("you signed up")
                    //res.redirect('/centers/donations');
                  })
                  .catch(err => console.log(err));
              });
            });
          }
        });
      }

})

//signup donor
router.post('/donor',[
    check('email').isEmail()
],function(req,res,next){
    let { email, password, password2, city, bloodType, } = req.body.user;
    console.log(req.body);
    email = email.toLowerCase();
    let errors = [];
    if ( !email || !password || !password2 || !city) {
        errors.push({ msg: 'Please enter all fields' });
      }
    
      if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
      }
    
      if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
      }
    
      if (errors.length > 0) {
        res.send(errors)
      } else {
        Donor.findOne({ email: email }).then(donor => {
          if (donor) {
            errors.push({ msg: 'Email already exists' });
            res.send(errors)
          } else {
            
            const newDonor = new Donor({
              email,
              password,
              bloodType: bloodType,
              city: city

            });
    
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newDonor.password, salt, (err, hash) => {
                if (err) throw err;
                newDonor.password = hash;
                newDonor
                  .save()
                  .then(donor => {
                    console.log("you are now logged in")
                    res.redirect('/donor/donations');
                  })
                  .catch(err => console.log(err));
              });
            });
          }
        });
      }

})

module.exports = router;