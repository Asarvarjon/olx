const expressFileUpload = require("express-fileupload");
const { ProfileUserGetController, ProfileCategoryPostController,AddProductPostController } = require("../controllers/ProfileController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();


router.get("/profile", AuthMiddleware, ProfileUserGetController) 
router.post("/add_category", expressFileUpload(), ProfileCategoryPostController)
router.post("/add_product", expressFileUpload(), AddProductPostController)

module.exports = {
    path: "/",
    router,
}