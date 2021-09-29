const { isValidObjectId } = require("mongoose")
const users = require("../models/UserModel")   
const messages = require("../models/MessagesModel")


module.exports = class MessagesController {  
    static async MessagesGetController(req, res) {
       
        try {
            const isValid = isValidObjectId(req.params.id)

            if(!isValid) throw new Error("Invalid")

            const receiver_id = await users.findOne({
                _id: req.params.id,
            })

            if(!receiver_id) throw new Error("User not found")

            const chats = await messages.find({
                $o: [
                    {
                        $and: [
                            {
                                owner_id: req.user._id
                            },
                            {
                                receiver_id: receiver_id._id
                            }
                        ]
                    },
                    {
                        $and: [
                            {
                                owner_id: receiver_id._id
                            },
                            {
                                receiver_id: req.user._id
                            }
                        ]
                    }
                ]
            })
 

            res.render("messages", {
                user: req.user,
                receiver: receiver_id,
            })
        } catch (error) {
            console.log(error + "");
            res.redirect("/")
        }
    }
}