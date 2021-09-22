const categories = require("../models/CategoryModel")
const products = require("../models/ProductModel")

module.exports = class HomeRouteController { 
      static async HomeGetController(req, res) {
        const list = await categories.find();
        const productsList = await products.find();

        res.render("Home", {
          user: req.user,
          list,
          productsList,
        })
    }

    static async ProductDetail(req, res) { 
      const detail = await products.findOne({
        _id: req.params.id
      })
 
      res.render("detail", {
        user: req.user,
        detail,
      })
    }


    
}