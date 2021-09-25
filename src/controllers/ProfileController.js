const categories = require("../models/CategoryModel")
const users = require("../models/UserModel") 
const path = require("path")
const products = require("../models/ProductModel")  


module.exports = class ProfileController {

  static async ProfileUserGetController(req, res) {
    const productCategory = await categories.find()  

    res.render("profile", {
      user: req.user,
      productCategory,
    })
  }

  static async ProfileCategoryPostController(req, res) {
      const {
        name
      } = req.body;

      const newCategory = await categories.create({
        name: name,
        photo: req.files.file.name,
      })

      await req.files.file.mv(path.join(__dirname, "..", "public", "images", req.files.file.name))

      res.redirect("/profile")
  }


  static async AddProductPostController(req, res) {
    try {
        const {name, content, phone, category, price} = req.body;  

        await req.files.file.mv(path.join(__dirname, "..", "public", "files", req.files.file.name))
          

        const product = await products.create({
            name,
            price,
            phone,
            photo: req.files.file.name,
            content, 
            category_id: category,
            owner_id: req.user.id,
        })
 
 
      res.redirect("/profile")
    } catch (error) {
      console.log(error);
    }
  }
 
}