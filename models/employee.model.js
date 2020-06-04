const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
const employeeschema = mongoose.Schema({
    username: { type: String, required: [true, 'Username is required'] },
    firstname: { type: String, required: [true, 'First name is required'] },
    username: { type: String },
    password: { type: String, required: true },
    mail: { type: String, unique: true },
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
    drivertype: {type: String,required: [true, 'Enter Driver Type'] },
    cdlStatus: {type: String,required: [true, 'Enter CDL Status'] },
    dotStatus: {type: String,required: [true, 'Enter DOT Status'] },
    duiStatus: {type: String,required: [true, 'Enter DUI Status'] },
    csaStatus: {type: String,required: [true, 'Enter CSA Status'] },
    accidentsStatus: {type: String,required: [true, 'Fill all mandatory Fields'] },
    noaccStatus: {type: String,required: [true, 'Fill all mandatory Fields'] },
    loggeddate: { type: Date, default: Date.now() }
});
const employeemodel = mongoose.model('jobseekers', employeeschema);
module.exports = employeemodel;