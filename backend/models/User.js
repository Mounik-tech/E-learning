import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const User =new mongoose.model("user", userSchema)

export default User;