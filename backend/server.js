require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(routes);

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {}, (err) => {
  if (err) throw err;
  console.log("DB connected...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}...`);
});
