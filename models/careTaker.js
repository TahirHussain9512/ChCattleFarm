const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    care_taker_img: { type: String, required: false },
    care_taker_name: { type: String, required: false },
    care_taker_contact: { type: String, required: false },
    care_taker_address: { type: String, required: false },
    care_taker_cnic: { type: String, required: false },
    care_taker_father: { type: String, required: false },
    care_taker_cast: { type: String, required: false },
    care_taker_id_card_back: { type: String, required: false },
    care_taker_id_card_front: { type: String, required: false },
    isVerified: { type: Boolean },
    resetCode: { type: String },
    resetCodeTime: { type: Date },
}, { timestamps: true });


module.exports = mongoose.model("CareTaker", schema, "care_taker");
