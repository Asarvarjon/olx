const HomeRoute = require("./HomeRoute")
const LoginRoute = require("./LoginRoute")
const profile = require("./profile")
const SignUpRoute = require("./SignUpRoute")

module.exports = app => { 
    app.use(HomeRoute.path, HomeRoute.router)
    app.use(LoginRoute.path, LoginRoute.router)
    app.use(SignUpRoute.path, SignUpRoute.router)
    app.use(profile.path, profile.router)
}