const { HomeGetController, ProfileUserGetController } = require("../controllers/HomeRouteController"); 
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/", HomeGetController);
router.get("/profile", AuthMiddleware, ProfileUserGetController)


module.exports = {
    path: "/",
    router,
}