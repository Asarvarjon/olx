const { isValidObjectId } = require("mongoose")
const users = require("../models/UserModel")   
const messages = require("../models/MessagesModel")
const { MessagesValidation } = require("../modules/validations")


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
            }).sort([["created_at", 1 ]])
 
 

            res.render("messages", {
                user: req.user,
                receiver: receiver_id,
                chats
            })
        } catch (error) {
            console.log(error + "");
            res.redirect("/")
        }
    }


    static async MessagesPostController(req, res) {
        try {
            const { message_text } = await MessagesValidation(req.body);

            if(!(isValidObjectId(req.user._id) && isValidObjectId(req.params?.id))) throw new Error("Id is invalid!")


            const chat = await messages.create({
                message_text: message_text,
                owner_id: req.user._id,
                receiver_id: req.params.id,
            })
 

            res.json({
                ok: true
            })
        } catch (error) {
            console.log(error);
            res.json({
                ok:false,
                error: error + ""
            })
        }
    }
}