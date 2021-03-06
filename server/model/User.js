const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    phone: Number,
    password: String,
    registerdate : Date,
    type: String,
    status: String,
    coupon: String
});

module.exports = mongoose.model("User",userSchema);