const mongoose = require("mongoose")

const MessagesSchema = new mongoose.Schema({
    message_text: {
        type: String,
        required: true, 
    } ,
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }, 
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users" 
    }
}
)

const messages = mongoose.model("messages", MessagesSchema);
 module.exports = messages;
