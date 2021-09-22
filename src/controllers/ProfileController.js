const categories = require("../models/CategoryModel")
const path = require("path")


module.exports = class ProfileController {  

  static async ProfileUserGetController(req, res) {

   

    res.render("profile", {
      user: req.user, 
    })
  }

  static async ProfileCategoryPostController(req, res) {
    const { name } = req.body; 
     
       const newCategory = await categories.create({
         name: name,
         photo: req.files.file.name,
       })

      await req.files.file.mv(path.join(__dirname, "..", "public", "images", req.files.file.name))

       
  }
}