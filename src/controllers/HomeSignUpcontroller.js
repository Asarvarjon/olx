const users = require("../models/UserModel");
const { generateHash } = require("../modules/bcrypt");
const { SignUpValidation } = require("../modules/validations"); 
 const { email: sendEmail } = require("../modules/email")

module.exports = class SignUpController { 
    static async SignUpGetController(req, res) {
      res.render("register");
  }

  static async SignUpPostController(req, res) {
    
    try {
      const { name, email, phone, password} = req.body
        
      const user = await users.create({
          name,
          email,
          password: await generateHash(password),
          phone,
      }) 

    //  await sendEmail(email, "Pochtangizni tasdiqlang", `Pochtangzini tasdiqlash uchun link `, `<a href="http://localhost:3000/users/verify/${user._id}">Tasdiqlash</a>`)
      
     res.redirect("/login")
    } catch (error) {
      console.log(error);
      res.render("register", {
        error
      })
    }
  }
}