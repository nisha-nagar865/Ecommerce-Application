const joi = require("@hapi/joi")

const Schema = {
    registerUser: joi.object({
        name : joi.string().max(20).required(),
        email : joi.string().email().required(),
        password : joi.string().min(6).required(),
        Contact_number : joi.number().integer().min(1000000000).max(9999999999).message("Invalid mobile number").required(),
        
    })
}