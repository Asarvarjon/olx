const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },   
    photo : {
        type: String,
        default: nophoto.png
    }
}
)

const categories = mongoose.model("categories", CategorySchema);
 module.exports = categories;
