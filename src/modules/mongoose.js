const mongoose = require("mongoose");
const users = require("../models/UserModel")
const products = require("../models/ProductModel")
const categories = require("../models/CategoryModel")
const sessions = require("../models/SessionsModel") 

async function mongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        
    } catch (error) {
        console.log("MONGO ERROR", error);
    }
}

module.exports = mongo;