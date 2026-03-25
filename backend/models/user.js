import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: { type: String, required: true },
    passsword: { type: String, required: true },
    age: { type: Number, },
    gender: { type: String }
})

module.exorts = mongoose.model("User", userScheme)
