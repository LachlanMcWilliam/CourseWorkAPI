"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: {
    type: String,
    required: "Please Enter"
  },
  drinks: {
    type: [Schema.Types.Mixed]
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Users", UserSchema);
