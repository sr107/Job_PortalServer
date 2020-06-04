const mongoose = require('mongoose');
const recruiterschema = mongoose.Schema({
    companyName: { type: String },
    password: String,
    appliedPeople:[Object],
    profileimage: { type: String },
    companyMail: String,
    location: String,
    About: String
});

const recruitermodel = mongoose.model('jobgivers', recruiterschema);
module.exports = recruitermodel;