

const express = require("express");
const cookieParser = require("cookie-parser")
const path = require("path");
const databaseMiddleware = require("./middlewares/DatabaseMiddleware");
const routes = require("./routes/routes");
const AuthMiddleware = require("./middlewares/AuthMiddleware");

const PORT = process.env.PORT || 3000;




async function server() {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is ready at ${PORT}`);
    }); 

    try {

        // common middlewares
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(cookieParser())
        app.use(express.static(path.join(__dirname, "src", "public")))
        app.use(databaseMiddleware)
        app.use(AuthMiddleware)


        // settings 
        app.set('views', __dirname + '/views');
        app.set("view engine", "ejs")
    } finally {
         routes(app)
    }
}


module.exports = server;
