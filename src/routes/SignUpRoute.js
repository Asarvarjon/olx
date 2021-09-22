const { SignUpGetController } = require("../controllers/HomeSignUpcontroller");

const router = require("express").Router();


router.get("/sign_up", SignUpGetController);

module.exports = {
    path: "/",
    router,
}