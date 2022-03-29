    const express = require("express");
    const mongoose = require("mongoose");
    const bodyParser = require('body-parser');
    const cookieParser =require("cookie-parser");
    const app = express();
    app.use(bodyParser.json());
    app.use(cookieParser());
    const db =require("./config/key.js").mongoURI;

    mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("mongoDB connected succsess"))
    .catch((err)=>console.log(err));




app.use('/', require('./router/User'));
app.use('/', require('./router/danhmuc'));
app.use('/', require('./router/sanpham'));
    const PORT =process.env.PORT || 8088;
    app.listen(PORT,console.log('sever run with port ' + PORT));