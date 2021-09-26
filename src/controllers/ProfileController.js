const categories = require("../models/CategoryModel")
const users = require("../models/UserModel") 
const path = require("path")
const products = require("../models/ProductModel")  
const mongoose = require("mongoose")


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

         let photos = []; 

         if(Array.isArray(req.files.file)) { 
           req.files.file.forEach((photo) => {
            
            const name = photo.md5 + ".jpg"
            photo.mv(
              path.join(__dirname, "..", "public", "files", name)
            )
            photos.push(name) 
          })
         } else { 
            const name = req.files.file.md5 + ".jpg"

            req.files.file.mv(
              path.join(__dirname, "..", "public", "files", name)
            )  

            photos.push(name)
         } 
   
          

        const product = await products.create({
            name,
            price,
            phone,
            photos,
            content, 
            category_id: mongoose.Types.ObjectId(category),
            owner_id: req.user.id,
        })
 
 
 
      res.redirect("/details/" + product.id)
    } catch (error) {
      console.log(error);
    }
  }
 
}