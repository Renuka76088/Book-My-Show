const mongoose=require("mongoose")
const ShowSchema=new mongoose.Schema({
    Showimage:{
        type:String,
        require:true
    },
    Showtype:{
        type:String,
        require:true
    },
    ShowName:{
        type:String,
        require:true
    },
    Duration:{
        type:String,
        require:true
    },
    Cast:{
        type:String,
        require:true
        
    },
    ReleaseDate:{
        type:Date,
        default:Date.now
    },
    ShowTiming:{
        type:String,
        default:0
    },
    Movietype:{
        type:String,
        require:true
    },
    
    Agetype:{
        type:String,
        require:true
    },
    languages:{
        type:String,
        require:true
    }

    
})

module.exports=mongoose.model("show",ShowSchema)