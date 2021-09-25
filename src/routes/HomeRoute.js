const { HomeGetController, ProductDetail, UserDetailGetController } = require("../controllers/HomeRouteController"); 
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/", HomeGetController);
router.get("/details/:id", ProductDetail)
router.get("/user/:id", UserDetailGetController)
 


module.exports = {
    path: "/",
    router,
}