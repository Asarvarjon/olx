const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    price: {
        type: String,
        required: true
    },   
    phone: {
        type: String,
        required: true,
    },
    photo : {
        type: String,
        default: "nophoto.png"
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    }
}
)

const products = mongoose.model("products", ProductSchema);
 module.exports = products;
