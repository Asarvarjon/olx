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
    photos : [String],
    content: {
        type: String,
        required: true,
    }, 
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }, 
}
)

const products = mongoose.model("products", ProductSchema);
 module.exports = products;
