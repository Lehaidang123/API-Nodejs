const express = require("express");
const danhmucrouter = express.Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
const passportConfig = require("../config/passport");
const danhmuc = require("../model/danhmuc");
const DM = require("../model/danhmuc");


// dangky
danhmucrouter.post("/adDM", (req, res) => {
    const { MADM, TenDM } = req.body;
    //kiem tra username co ton tai khong
    DM.findOne({ MADM }, (err, dm) => {
    if (err)
    res.status(500).json({
    message: { msgBody: "Error", msgError: true },
    });
    if (dm)
    res.status(400).json({
    message: { msgBody: "danh muc đã tồn tại", msgError: true },
    });
    else {
    const newDM = new DM({ MADM, TenDM });
    newDM.save((err) => {
    if (err)
    res.status(500).json({
    message: { msgBody: "Error", msgError: true },
    });
    else
    res.status(200).json({
    message: { msgBody: "them danh muc Thanh Cong", msgError: false },
    });
    });
    }
    });
    });




    danhmucrouter.get("/getDanhmuc", (request, response) => {
        danhmuc.collection.find({}).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    });

    
    module.exports = danhmucrouter;    