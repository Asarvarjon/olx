module.exports = class HomeRouteController { 
      static async HomeGetController(req, res) {
        res.render("Home", {
          user: req.user
        })
    }


    static async ProfileUserGetController(req, res) {
      res.render("profile", {
        user: req.user,
      })
    }
}