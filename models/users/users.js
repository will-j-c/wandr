const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("User", usersSchema);

module.exports = UserModel;