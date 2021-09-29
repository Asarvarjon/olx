 
const { MessagesGetController } = require("../controllers/MessagesController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/messages/:id", AuthMiddleware, MessagesGetController); 


module.exports = {
    path: "/",
    router,
}