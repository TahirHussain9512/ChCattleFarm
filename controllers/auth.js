const Animal = require("../models/animal");
const CareTaker = require("../models/careTaker");
const Owner = require("../models/owner");
const Saler = require("../models/saler");
const Refrence = require("../models/refrence");



module.exports.addAnimal = async (req, res, next) => {
  const { animal_img, animal_term_conditions, type, animal_baby_gender, animal_seman_type, animal_baby, animal_notes, animal_advance_loan, animal_tag, animal_age, animal_type, animal_gender, animal_color, animal_weight, animal_purchased_price, animal_purchased_date, animal_seman_date, care_taker, owner, animal_refrence, expence_name, expence_price, animal_video, animal_catetaker_aggrement_video } = req.body;

  try {

    const animal = await Animal.create({
      animal_img,
      animal_tag,
      animal_age,
      animal_type,
      animal_gender,
      animal_color,
      animal_weight,
      animal_purchased_price,
      animal_purchased_date,
      animal_seman_date,
      care_taker,
      owner,
      animal_refrence,
      expence_name,
      expence_price,
      animal_video,
      animal_catetaker_aggrement_video,
      animal_notes,
      animal_advance_loan,
      type,
      animal_seman_type,
      animal_baby,
      animal_baby_gender,
      animal_term_conditions
    })

    if (animal)
      return res.status(200).json({ error: false, msg: "New Animal registered successfully" });

    return res.status(400).send({ error: true, msg: "Failed to create Animal" })
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ error: true, msg: "Internal server error" })
  }

}


module.exports.addCareTaker = async (req, res, next) => {
  const { care_taker_img, care_taker_name, care_taker_contact, care_taker_address, care_taker_cnic, care_taker_id_card_back, care_taker_id_card_front } = req.body;

  try {

    const user = await CareTaker.create({
      care_taker_img,
      care_taker_name,
      care_taker_contact,
      care_taker_address,
      care_taker_cnic,
      care_taker_id_card_back,
      care_taker_id_card_front
    })

    if (user)
      return res.status(200).json({ error: false, msg: "New User registered successfully" });

    return res.status(400).send({ error: true, msg: "Failed to create user" })
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ error: true, msg: "Internal server error" })
  }

}


module.exports.addOwner = async (req, res, next) => {
  const { owner_img, owner_name, owner_contact, owner_address, owner_cnic } = req.body;

  try {

    const user = await Owner.create({
      owner_img,
      owner_name,
      owner_contact,
      owner_address,
      owner_cnic,
    })

    if (user)
      return res.status(200).json({ error: false, msg: "New User registered successfully" });

    return res.status(400).send({ error: true, msg: "Failed to create user" })
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ error: true, msg: "Internal server error" })
  }

}


module.exports.addRefrence = async (req, res, next) => {
  const { refrence_img, refrence_name, refrence_contact, refrence_address, refrence_cnic, refrence_id_card_back, refrence_id_card_front } = req.body;

  try {

    const refrence = await Refrence.create({
      refrence_img,
      refrence_name,
      refrence_contact,
      refrence_address,
      refrence_cnic,
      refrence_id_card_back,
      refrence_id_card_front
    })

    if (refrence)
      return res.status(200).json({ error: false, msg: "New Refrence registered successfully" });

    return res.status(400).send({ error: true, msg: "Failed to create user" })
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ error: true, msg: "Internal server error" })
  }

}


module.exports.addSaler = async (req, res) => {
  const { animal_img, animal_condition, profit_percentage_by_day, profit_amount_by_day, profit_amount_by_month, profit_percentage_by_month, animal_term_conditions, animal_baby_gender, saler_notes, care_taker_actual_profit, owner_actual_profit, total_actual_profit, animal_advance_loan, animal_notes, animal_tag, animal_age, animal_type, animal_gender, animal_color, animal_weight, animal_purchased_price, animal_purchased_date, animal_seman_date, care_taker, owner, expence_name, expence_price, saler_name, saler_contact, saler_address, sale_price, sale_date, owner_amount, care_taker_amount, animal_refrence, total_actual_profit_percentage, care_taker_actual_profit_percentage, owner_actual_profit_percentage, type, animal_seman_type, animal_baby } = req.body;

  try {

    const animal = await Saler.create({
      animal_img,
      animal_tag,
      animal_age,
      animal_type,
      animal_gender,
      animal_color,
      animal_weight,
      animal_purchased_price,
      animal_purchased_date,
      animal_seman_date,
      care_taker,
      owner,
      expence_name,
      expence_price,
      saler_name,
      saler_contact,
      saler_address,
      sale_price,
      sale_date,
      owner_amount,
      care_taker_amount,
      animal_refrence,
      animal_advance_loan,
      animal_notes,
      saler_notes,
      care_taker_actual_profit,
      owner_actual_profit,
      total_actual_profit,
      care_taker_actual_profit_percentage,
      owner_actual_profit_percentage,
      total_actual_profit_percentage,
      type,
      animal_seman_type,
      animal_baby,
      animal_baby_gender,
      animal_term_conditions,
      profit_percentage_by_day,
      profit_percentage_by_month,
      profit_amount_by_day,
      profit_amount_by_month,
      animal_condition,
      animal_condition
    })

    if (animal)
      return res.status(200).json({ error: false, msg: "New Animal registered successfully" });

    return res.status(400).send({ error: true, msg: "Failed to create Animal" })
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ error: true, msg: "Internal server error" })
  }

}









exports.FindAnimalInformation = async (req, res) => {
  try {

    let filterField = req.params.filterDataText;
    let format = parseInt(req.params.format);
    let animalInformation = await Animal.aggregate([
      {
        $lookup: {
          from: "care_taker",
          localField: "care_taker",
          foreignField: "care_taker_name",
          as: "care_taker_Information"
        }
      },
      {
        $lookup: {
          from: "owner",
          localField: "owner",
          foreignField: "owner_name",
          as: "owner_Information"
        }
      },
      {
        $lookup: {
          from: "refrence",
          localField: "animal_refrence",
          foreignField: "refrence_name",
          as: "refrence_Information"
        }
      },
      {
        $sort: {
          [filterField]: format
        }
      }
    ])


    if (animalInformation) {
      return res.status(200).json({ animalInformation });
    }
    else {
      return res.status(404).json({ error: true, msg: "No Care Taker found" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Error retrieving users" });
  }
}


exports.FindCareTaker = async (req, res) => {
  try {
    let caretakerDetails = await CareTaker.find();
    if (caretakerDetails) {
      return res.status(200).json({ caretakerDetails });
    } else {
      return res.status(404).json({ error: true, msg: "No Care Taker found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Error retrieving users" });
  }
}


exports.FindOwner = async (req, res) => {
  try {
    let ownerDetails = await Owner.find();
    if (ownerDetails) {
      return res.status(200).json({ ownerDetails });
    } else {
      return res.status(404).json({ error: true, msg: "No Care Taker found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Error retrieving users" });
  }
}


exports.FindRefrence = async (req, res) => {
  try {
    let refrenceDetails = await Refrence.find();
    if (refrenceDetails) {
      return res.status(200).json({ refrenceDetails });
    } else {
      return res.status(404).json({ error: true, msg: "No Care Taker found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Error retrieving users" });
  }
}


exports.AnimalGetById = async (req, res) => {
  try {

    const id = req.params.id;
    const data = await Animal.find({ _id: `${id}` })
    if (!data) {
      return res.status(404).json({ mag: "User Not Found" })
    }
    res.status(200).json({ data })

  } catch (error) {
    res.status(500).json({ error: error })
  }
}


exports.SalerGetById = async (req, res) => {
  try {

    const id = req.params.id;
    const data = await Saler.find({ _id: `${id}` })
    if (!data) {
      return res.status(404).json({ mag: "User Not Found" })
    }
    res.status(200).json({ data })

  } catch (error) {
    res.status(500).json({ error: error })
  }
}


exports.FindSaler = async (req, res) => {
  try {
    let salerDetails = await Saler.aggregate([
      {
        $lookup: {
          from: "care_taker",
          localField: "care_taker",
          foreignField: "care_taker_name",
          as: "care_taker_Information"
        }
      },
      {
        $lookup: {
          from: "owner",
          localField: "owner",
          foreignField: "owner_name",
          as: "owner_Information"
        }
      }
      ,
      {
        $lookup: {
          from: "refrence",
          localField: "animal_refrence",
          foreignField: "refrence_name",
          as: "refrence_Information"
        }
      }
    ]);
    if (salerDetails) {
      return res.status(200).json({ salerDetails });
    } else {
      return res.status(404).json({ error: true, msg: "No Care Taker found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Error retrieving users" });
  }
}


exports.FindDataOfMonthOfAnimal = async (req, res) => {
  const now = new Date();
  try {
    // Month
    let fromDate = new Date(new Date().getFullYear(), new Date().getMonth(), 2);
    let toDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
    // week
    let today = new Date();
    let mondayDate = new Date(today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)));
    mondayDate.setHours(24, 60, 60, 1000);
    let sundayDate = new Date(mondayDate);
    sundayDate.setDate(mondayDate.getDate() + 6);
    sundayDate.setHours(0, 0, 0, 0);

    let animalDetails = await Animal.aggregate([
      {
        $facet: {
          today: [
            {
              $match: {
                animal_purchased_date: now.toISOString().slice(0, 10)
                // {
                //$gte: new Date(new Date().setHours(0, 0, 0, 0)), // Start of today
                //$lt: new Date(new Date().setHours(24, 0, 0, 0)) // Start of tomorrow

                // }
              }
            }
          ],
          thisWeek: [
            {
              $match: {
                animal_purchased_date: {
                  $gte: mondayDate.toISOString().slice(0, 10),
                  $lt: sundayDate.toISOString().slice(0, 10)
                }
              }
            }
          ],
          thisMonth: [
            {
              $match: {
                animal_purchased_date: {
                  $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10),
                  $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2).toISOString().slice(0, 10)
                }
              }
            }
          ],
          thisYear: [
            {
              $match: {
                animal_purchased_date: {
                  $gte: new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10),
                  $lt: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999).toISOString().slice(0, 10)
                }
              }
            }

          ],
        }
      }
    ]);

    let salerDetails = await Saler.aggregate([
      {
        $facet: {
          today: [
            {
              $match: {
                sale_date: now.toISOString().slice(0, 10)
                // {
                //$gte: new Date(new Date().setHours(0, 0, 0, 0)), // Start of today
                //$lt: new Date(new Date().setHours(24, 0, 0, 0)) // Start of tomorrow

                // }

              }
            }
          ],
          thisWeek: [
            {
              $match: {
                sale_date: {
                  $gte: mondayDate.toISOString().slice(0, 10),
                  $lt: sundayDate.toISOString().slice(0, 10)
                }
              }
            }
          ],
          thisMonth: [
            {
              $match: {
                sale_date: {
                  $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10),
                  $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2).toISOString().slice(0, 10)
                }
              }
            }
          ],
          thisYear: [
            {
              $match: {
                sale_date: {
                  $gte: new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10),
                  $lt: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999).toISOString().slice(0, 10)
                }
              }
            }

          ],
        }
      }
    ]);

    let dates = {
      monthStartDate: fromDate,
      monthEndDate: toDate,
      weekStartDate: mondayDate,
      weekEndDate: sundayDate
    }

    let animalAndSalerDetails = await Saler.aggregate([
      {
        $facet: {
          today: [
            {
              $match: {
                animal_purchased_date: now.toISOString().slice(0, 10)
                // {
                //$gte: new Date(new Date().setHours(0, 0, 0, 0)), // Start of today
                //$lt: new Date(new Date().setHours(24, 0, 0, 0)) // Start of tomorrow

                // }

              }
            }
          ],
          thisWeek: [
            {
              $match: {
                animal_purchased_date: {
                  $gte: mondayDate.toISOString().slice(0, 10),
                  $lt: sundayDate.toISOString().slice(0, 10)
                }
              }
            }
          ],
          thisMonth: [
            {
              $match: {
                animal_purchased_date: {
                  $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10),
                  $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2).toISOString().slice(0, 10)
                }
              }
            }
          ],
          thisYear: [
            {
              $match: {
                animal_purchased_date: {
                  $gte: new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10),
                  $lt: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999).toISOString().slice(0, 10)
                }
              }
            }

          ],
        }
      }
    ]);

    let animalAndSalerDetailes = [animalAndSalerDetails,animalDetails]





    if (animalDetails || salerDetails || dates || animalAndSalerDetailes) {
      return res.status(200).json({ animalDetails, salerDetails, dates,animalAndSalerDetailes });
    } else {
      return res.status(404).json({ error: true, msg: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Error Hai Bhai Log Error Hai" });
  }
}








exports.deleteAnimal = async (req, res) => {

  try {

    const id = req.params.id;
    const deleteAnimal = await Animal.findById(id);
    if (!deleteAnimal) {
      return res.status(404).json({ msg: "User not Exist" })
    }
    await Animal.findByIdAndDelete(id);
    res.status(200).json({ msg: "User Deleted Succussfully" })

  } catch (error) {
    res.status(500).json({ error: error })
  }

}








exports.updateAnimal = async (req, res) => {
  try {

    const id = req.params.id;
    const animalData = await Animal.findById(id);
    if (!animalData) {
      return res.status(404).json({ msg: "User Not Found" })
    }
    const updateAnimal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ updateAnimal })

  } catch (error) {
    res.status(500).json({ error: error })
  }
}


exports.updateSaler = async (req, res) => {
  try {

    const id = req.params.id;
    const salerData = await Saler.findById(id);
    if (!salerData) {
      return res.status(404).json({ msg: "User Not Found" })
    }
    const updateSaler = await Saler.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ updateSaler })

  } catch (error) {
    res.status(500).json({ error: error })
  }
}
