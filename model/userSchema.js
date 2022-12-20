const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    Contact_number : {
        type : String,
        require : true
    },
    isActive : {
        type : String,
        require : true
    },
    Role : {
        type : String,
        default : "user"
    }
})
userSchema.set('timestamps',true);
module.exports=mongoose.model("user",userSchema)