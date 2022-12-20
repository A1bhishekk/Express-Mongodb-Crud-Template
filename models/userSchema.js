import mongoose from "mongoose";
import validator from "validator";

// create schema for user

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
        type:String,
        required: [true, "Please enter your phone number"],
        minLength:[10, "phone number must be 10 digits"],
        maxLength:[10, "phone number must be 10 digits"],
    },
    age: {
        type: Number,
        required: [true, "Please enter your age"],
    },
}, );

// create model for user

const User = mongoose.model("User", userSchema);

export default User;