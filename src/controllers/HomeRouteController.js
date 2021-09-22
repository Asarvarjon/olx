const categories = require("../models/CategoryModel")

module.exports = class HomeRouteController { 
      static async HomeGetController(req, res) {
        const list = await categories.find()

        res.render("Home", {
          user: req.user,
          list,
        })
    }


    
}