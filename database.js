const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://localhost/react-node", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connect) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

module.exports = connection;
