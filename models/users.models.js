const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 6
  },
  dateofBirth: {
    type: Date
  },
  gender: {
    type: String
  },
  userCreated: {
    type: Date,
    default: Date.now()
  },
  moods: [{ type: Schema.Types.ObjectId, ref: "CheckIn" }]
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
