const mongoose = require("mongoose")

const SessionsSchema = new mongoose.Schema({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }, 
    user_agent: {
        type: String,
        required: true, 
    },
    created_at: {
        type: Date,
        default: new Date(),
    }

}
)

const sessions = mongoose.model("sessions", SessionsSchema);
 module.exports = sessions;