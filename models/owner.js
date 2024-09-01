const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    owner_img: { type: String, required: false },
    owner_name: { type: String, required: false },
    owner_contact: { type: String, required: false },
    owner_address: { type: String, required: false },
    owner_cnic: { type: String, required: false },
    owner_father: { type: String, required: false },
    owner_cast: { type: String, required: false },
    isVerified: { type: Boolean },
    resetCode: { type: String },
    resetCodeTime: { type: Date },
}, { timestamps: true });


module.exports = mongoose.model("Owner", schema, "owner");
