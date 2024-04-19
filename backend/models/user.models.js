import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        email = email.trim();
        return email.split("@")[1] == 'knit.ac.in';
      },
      message: "Please enter a knit domain email address",
    },
  },
  contact_no: {
    type: String,
    required: true,
    lowercase: true,
    validate: [
      {
        validator: function (num) {
          return num.length === 10;
        },
        message: "Contact number should be of 10 digits",
      },
      {
        validator: function (num) {
          return validator.isNumeric(num);
        },
        message: "Contact number should contain only numeric digits",
      }
    ],
  },
  branch: {
    type: String,
    lowercase: true,
    enum: [
      "mca",
      "computer science",
      "information technology",
      "electronics",
      "electrical",
      "civil",
      "mechanical",
    ],
  },
  year: {
    type: Number,
    enum: [1, 2, 3, 4],
  },
  hostel: {
    type: String,
    lowercase: true,
  },
  profile_pic: {
    type: String,
    lowercase: true,
    default:
      "https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg",
  },
  gender: {
    type: String,
    lowercase: true,
    enum: ["male", "female", "prefer not to say"],
  },
  course: {
    type: String,
    lowercase: true,
    enum: ["mca", "b.tech", "m.tech"],
  },
  password: {
    type: String,
    required: true,
  },
},{timestamps:true});

const User = mongoose.model("user", userSchema);

export default User;
