const mongoose = require("mongoose");
function DbConnect() {
  const DB_URL = process.env.DB_URL;
  // Database connection
  mongoose.connect(DB_URL, {}, (err) => {
    if (err) throw err;
    console.log("DB connected...");
  });
}

module.exports = DbConnect;
