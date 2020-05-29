const mongoose = require("mongoose");

const usertypeSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    phone: Number,
    password: String,
    registerdate : Date,
    type: String,
    status: String,
    schoolname: String
});

module.exports = mongoose.model("Usertype",usertypeSchema);