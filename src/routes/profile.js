const expressFileUpload = require("express-fileupload");
const { ProfileUserGetController, ProfileCategoryPostController,AddProductPostController } = require("../controllers/ProfileController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

const productFileUpload = expressFileUpload({
    safeFileNames: true
})


router.get("/profile", AuthMiddleware, ProfileUserGetController) 
router.post("/add_category", expressFileUpload(), ProfileCategoryPostController)
router.post("/add_product", productFileUpload, AddProductPostController)

module.exports = {
    path: "/",
    router,
}