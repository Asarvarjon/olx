const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: [32, "Ismingiz juda uzun"],
        min: [3, "Ismingiz juda qisqa"]
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    }, 
    phone: {
        type: Number,
        
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
}
)

const users = mongoose.model("users", userSchema);
 module.exports = users;
