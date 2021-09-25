const categories = require("../models/CategoryModel")
const products = require("../models/ProductModel");
const users = require("../models/UserModel");

module.exports = class HomeRouteController { 
      static async HomeGetController(req, res) {
        const list = await categories.find();
        const productsList = await products.find().populate("owner_id")    

        res.render("Home", {
          user: req.user,
          list,
          productsList,
        })
    }

    static async ProductDetail(req, res) { 
      const detail = await products.findOne({
        _id: req.params.id
      }).populate("owner_id") 
 
      const list = await categories.find();

      const adsOwner = await products.find({
        _id: req.params.id
      }).populate("owner_id")   
 
 
      res.render("detail", {
        user: req.user,
        detail,  
        adsOwner,
      })
    }

    static async UserDetailGetController(req, res) {
 
        
      let productUser = await products.findOne({
        owner_id: req.params.id
      }).populate("owner_id") 

      console.log(productUser);
   
      res.render("adsUser", {
        user: req.user,
        productUser, 
      })

 
    }


    
}