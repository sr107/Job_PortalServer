const mongoose = require('mongoose');
//var passportLocalMongoose = require("passport-local-mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

// mongoose.set('useFindAndModify', false);
const employeeschema = mongoose.Schema({
    username: { type: String, required: [true, 'Username is required'] },
    firstname: { type: String, required: [true, 'First name is required'] },
    lastname: { type: String },
    password: { type: String, required: true },
    mail: { type: String, unique: true, required: true },
    profileimage: { type: String },
    gender: String,
    mobile: { type: Number, unique: true },
    dob: {type: Date},
    address: [String],
    city: [String],
    zip: [String],
    experience: Number,
    drivertype: String,
    appliedjobs: [String],
 //   resetPasswordToken: String,
 //   resetPasswordExpires: Date,
    drivertype: {type: String},
    cdlStatus: {type: String},
    dotStatus: {type: String },
    duiStatus: {type: String },
    csaStatus: {type: String },
    accidentsStatus: {type: String },
    noaccStatus: {type: String},
    loggeddate: { type: Date, default: Date.now() }
});

//UserSchema.plugin(passportLocalMongoose)

const employeemodel = mongoose.model('jobseekers', employeeschema);
module.exports = employeemodel;