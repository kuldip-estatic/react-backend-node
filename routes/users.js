var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/users");

// list of users
router.get("", async function (req, res, next) {
  const user = req.body;
  await User.find(user)
    .then((result) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: result,
        msg: "Data fetching successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: err,
        msg: "Error while data fetching",
      });
    });
});

// list of users by id
router.get("/:id", async function (req, res, next) {
  const Id = req.params.id;
  const user = req.body;
  await User.findById(Id, user)
    .then((result) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: result,
        msg: "Data fetching successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: err,
        msg: "Error while data fetching",
      });
    });
});

// create users data
router.post("/", async function (req, res, next) {
  const user = req.body;
  await User.create(user)
    .then((result) => {
      res.status(200).json({
        success: true,
        error: false,
        data: result,
        msg: "User created successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: true,
        data: err,
        msg: "Error while creating",
      });
    });
});

// update data of users
router.patch("/:id", async function (req, res) {
  const Id = req.params.id;
  const user = req.body;
  await User.findByIdAndUpdate(Id, user)
    .then((user) => {
      if (user) {
        return res.status(200).json({
          success: true,
          error: false,
          data: user,
          msg: "User updated successfully",
        });
      } else {
        return res.status(200).json({
          success: true,
          error: false,
          msg: "User not found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: [],
        msg: "Error while updating",
      });
    });
});

// delete user data by id
router.delete("/:id", async function (req, res) {
  const Id = req.params.id;
  const user = req.body;
  await User.findByIdAndRemove(Id)
    .then((user) => {
      if (user) {
        return res.status(200).json({
          success: true,
          error: false,
          data: user,
          msg: "User deleted successfully",
        });
      } else {
        return res.status(200).json({
          success: true,
          error: false,
          msg: "User not found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: [],
        msg: "Error while deleting",
      });
    });
});

module.exports = router;
