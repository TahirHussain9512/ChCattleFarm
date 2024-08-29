const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    refrence_img: { type: String, required: false },
    refrence_name: { type: String, required: false },
    refrence_contact: { type: String, required: false },
    refrence_address: { type: String, required: false },
    refrence_cnic: { type: String, required: false },
    refrence_id_card_back: { type: String, required: false },
    refrence_id_card_front: { type: String, required: false },
    isVerified: { type: Boolean },
    resetCode: { type: String },
    resetCodeTime: { type: Date },
}, { timestamps: true });


module.exports = mongoose.model("Refrence", schema, "refrence");
