const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    father: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    cnic: String,
    phoneNumber: String,
    address: String,
    expire: String
});


const User = mongoose.model("User", userSchema);
module.exports = User;

