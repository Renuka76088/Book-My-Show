const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    surname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    status:{
        type:Number,
        default:0
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("user",UserSchema)