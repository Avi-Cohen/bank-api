const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(router);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.snqur.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);

app.listen(process.env.PORT, () => console.log("Running"));
