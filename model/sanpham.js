const mongoose = require("mongoose");

const SPSchema= new mongoose.Schema({
Masp: {

    type:String,
    require:true,
    min:2,
},
TenSP: {
type: String ,
require : true,
min:2

},
Gia:{
 type: String,
 required:true,
 min:2
},
Mota:{

    type:String,
    required:true,
    min:2

},

MADM:{

    
    type:String,
    require:true,
    min:2,
},

IMG:{

    type:String,
    require:true,
    min:2
},

});
module.exports= mongoose.model("sanpham",SPSchema);