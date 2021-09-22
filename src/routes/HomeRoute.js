const { HomeGetController, ProductDetail } = require("../controllers/HomeRouteController"); 
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/", HomeGetController);
router.get("/details/:id", ProductDetail)
 


module.exports = {
    path: "/",
    router,
}