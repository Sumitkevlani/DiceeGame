import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';

const playerScoreMap = {
    type: Map,
    of: Number,
    default: {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0
    }
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        minLength: [5, "Name must be of at least 5 characters."],
        maxLength: [30, "Name must not be more than 30 characters."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email."],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email."]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [8, "Password must be of at least 8 characters."],
    },
    players: {
        type: [playerScoreMap],
        default: [
            {},
            {},
            {}
        ]
    }
});

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    else {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("user", userSchema);
export default User;