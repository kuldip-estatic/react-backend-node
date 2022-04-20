const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema(
  {
    // id: {
    //   type: Number,
    //   required: [true, "id is required"],
    //   auto: true,
    // },
    first_name: {
      type: String,
      required: [true, "First name is required"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    city: {
      type: String,
      required: [true, "city name required"],
    },
    state: {
      type: String,
      required: [true, "state name required"],
    },
    country: {
      type: String,
      required: [true, "country name required"],
    },
    department: {
      type: String,
      required: [true, "department name required"],
    },
    gender: {
      type: String,
      required: [true, "gender required"],
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", user);
