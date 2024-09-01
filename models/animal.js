const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    animal_img: { type: String, required: false },
    animal_img2: { type: String, required: false },
    animal_tag: { type: String, required: false },
    animal_age: { type: Number, required: false },
    animal_type: { type: String, required: false },
    animal_gender: { type: String, required: false },
    animal_color: { type: String, required: false },
    animal_weight: { type: Number, required: false },
    animal_purchased_price: { type: Number, required: false },
    animal_purchased_date: { type: String, required: false },
    animal_seman_date: { type: String, required: false },
    care_taker: { type: String, required: false },
    animal_video: { type: String, required: false },
    animal_catetaker_aggrement_video: { type: String, required: false },
    owner: { type: String, required: false },
    animal_refrence: { type: String, required: false },
    expence_name: { type: String, required: false },
    expence_price: { type: Number, required: false },
    animal_notes: { type: String, required: false },
    animal_advance_loan: { type: Number, required: false },
    type: { type: String, required: false },
    animal_seman_type: { type: String, required: false },
    animal_baby: { type: String, required: false },
    animal_baby_gender: { type: String, required: false },
    animal_term_conditions: { type: String, required: false },
    isVerified: { type: Boolean },
    resetCode: { type: String },
    resetCodeTime: { type: Date },
}, { timestamps: true });


module.exports = mongoose.model("Animal", schema, "animals");
