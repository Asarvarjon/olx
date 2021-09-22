const Joi = require("joi")

module.exports = class Validations {
    static async SignUpValidation(data) {
        return await Joi.object({
            name: Joi.string().required().max(32).min(3).trim().error(new Error("Name is invalid")),
            email: Joi.string().email().required().trim().error(new Error("Email is invalid")),
            phone: Joi.string().max(32).min(5).required().error(new Error("Phone number is invalid")),
            password: Joi.string().min(4).required()
        }).validateAsync(data)
    }

    static async LoginValidation(data) {
        return await Joi.object({ 
            email: Joi.string().email().required().trim().error(new Error("Email is invalid")), 
            password: Joi.string().min(4).required()
        }).validateAsync(data)
    }
}