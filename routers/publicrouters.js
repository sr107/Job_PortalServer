const express = require('express');
const router = express.Router();
const multer = require('multer');
const employeecntrl = require('../controllers/employee.cntrl');
const recruitercntrl = require('../controllers/recruiter.cntrl');
const employeemiddleware = require('../middlewares/middle');


//var User = require("../models/employeemodel");
//var Campground = require("../models/campground");
//var async = require("async");
//var nodemailer = require("nodemailer");
//var crypto = require("crypto");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     let filename = Date.now() + '-' + file.originalname;
//     req.body.profileimage = filename;
//     cb(null, filename)
//   }
// });
// const upload = multer({ storage: storage });
router.post('/addemployee',employeecntrl.addemployees);
router.post('/employee/login', employeecntrl.employeelogin);
router.post('/addrecruiter',recruitercntrl.addrecruiters);
router.post('/recruiter/login', recruitercntrl.loginrecruiter);


module.exports = router;
