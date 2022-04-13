const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema({
TenKH: {

    type:String,
    require:true,
    min:2,
},
Noidung: {
type: String ,
require : true,
min:2

},
ngay: {
    type: String ,
    require : true,
    min:2
    
    },


Masp: {
        type: String ,
        require : true,
        min:2
        
        }



});
module.exports= mongoose.model("comment",UserSchema);