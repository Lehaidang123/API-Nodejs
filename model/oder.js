const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema({
TenKH: {

    type:String,
    require:true,
    min:2,
},
Diachi: {
type: String ,
require : true,
min:2

},
Sdt: {
    type: String ,
    require : true,
    min:2
    
    },


Mail: {
        type: String ,
        require : true,
        min:2
        
        },

 Masp: {
            type: String ,
            require : true,
            min:2
            
            }
            ,
            TenSP: {
                type: String ,
                require : true,
                min:2
                
                },

                Gia: {
                    type: String ,
                    require : true,
                    min:2
                    
                    },
                    Soluong: {
                        type: String ,
                        require : true,
                        min:2
                        
                        }


});
module.exports= mongoose.model("oder",UserSchema);