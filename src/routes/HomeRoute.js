const { HomeGetController, ProductDetail, UserDetailGetController, UserExitController } = require("../controllers/HomeRouteController"); 
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/", HomeGetController);
router.get("/details/:id", ProductDetail)
router.get("/user/:id", UserDetailGetController)
router.get("/exit", UserExitController)
 


module.exports = {
    path: "/",
    router,
}