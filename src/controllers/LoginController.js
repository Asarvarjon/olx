const users = require("../models/UserModel");
const { compareHash } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");
const { LoginValidation } = require("../modules/validations")

module.exports = class LoginController { 
    static async LoginGetController(req, res) {
      res.render("login")
  }

  static async LoginPostController(req, res) {
    try {
      const { email, password } =  await LoginValidation(req.body) 

      const user = await users.findOne({
        email: email,
      })

      if (!user) throw new Error("User topilmadi");

			if (!(await compareHash(password, user.password)))
				throw new Error("Parol xato");

			res.cookie(
				"token",
				await createToken({
					id: user._id,
				})
			).redirect("/");  
    } catch (error) {
      res.render("login", {
        error
      })
    }
  }
}