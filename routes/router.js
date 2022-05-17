const express = require("express");
const mongoose = require("mongoose");
const AccountModel = require("../Models/accountModel");
const ActionModel = require("../Models/actionModel");

const router = new express.Router();

router.get("/api/accounts", async (req, res) => {
  try {
    const accounts = await AccountModel.find({});
    console.log(accounts);
    res.send(accounts);
  } catch (error) {
    res.send(error);
  }
});

router.get("/api/transactions", async (req, res) => {
  const transactions = await ActionModel.find({});
  res.send(transactions);
  console.log(transactions);
});

router.get("/api/actions", async (req, res) => {
  const transactions = await ActionModel.find({}).select("actionType");
  res.send(transactions);
  console.log(transactions);
});

router.post("/api/accounts", async (req, res) => {
  try {
    console.log(req.body);
    const account = new AccountModel(req.body);
    await account.save();
    console.log(account);
    res.send("");
  } catch (error) {
    res.send(error);
  }
});

router.get("/api/accounts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await AccountModel.find({ id });
    // const account = await AccountModel.find({id:id});
    // const account = await AccountModel.find(req.params);
    console.log(account);
    res.send(account);
  } catch (error) {
    res.send(error);
  }
});

router.post("/api/accounts/:id", async (req,res)=>{

})

module.exports = router;
