const { LoginGetController } = require("../controllers/LoginController");


const router = require("express").Router();


router.get("/login", LoginGetController);

module.exports = {
    path: "/",
    router,
}