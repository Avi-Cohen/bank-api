const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  credit: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw "Credit needs to be a positive #";
    },
  },
  cash: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < -this.credit) throw "Cash can't be less than credit allowed";
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const AccountModel = mongoose.model("account", AccountSchema)
module.exports = AccountModel