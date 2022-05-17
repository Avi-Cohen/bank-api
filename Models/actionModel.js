const mongoose = require("mongoose");
const AccountModel = require("./accountModel");

const ActionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),
  },
  actionType: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!["withdraw", "deposit"].includes(value)) throw "Not a valid action";
    },
  },
  account: {
    type: Number,
    required: true,
    async validate(value) {
      if ((await AccountModel.find({ id: value })) === [])
        throw "User was not founs";
    },
  },
  amount: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) throw "action amount needs to be positive #";
    },
  },
});

const ActionModel = mongoose.model("action", ActionSchema);
module.exports = ActionModel;
