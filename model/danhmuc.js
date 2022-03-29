const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema({
MADM: {

    type:String,
    require:true,
    min:2,
},
TenDM: {
type: String ,
require : true,
min:2

}

});
module.exports= mongoose.model("danhmuc",UserSchema);