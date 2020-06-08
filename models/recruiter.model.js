const mongoose = require('mongoose');
const recruiterschema = mongoose.Schema({
    username: { type: String },
    companyName: { type: String },
    email: { type: String, unique: true, required: true },
    password: String,
    appliedPeople:[Object],
    profileimage: { type: String },
    location: String,
    About: String
});

const recruitermodel = mongoose.model('jobgivers', recruiterschema);
module.exports = recruitermodel;