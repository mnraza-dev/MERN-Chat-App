import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6, "Email must be at least 6 characters long"],
        maxLength: [50, "Email must not be longer than 50 characters"]
    },
    password: {
        type: String,
    }

})

userSchema.statics.hasPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}