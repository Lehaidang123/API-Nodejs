const express = require("express");
const oderouter = express.Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
const passportConfig = require("../config/passport");
const oder = require("../model/oder");





oderouter.post("/adoder", (req, res) => {
    const { TenKH, Diachi,Sdt,Mail,Masp,TenSP,Gia,Soluong } = req.body;
   
    oder.findOne({ Masp }, (err, sp) => {
    if (err)
    res.status(500).json({
    message: { msgBody: "Error", msgError: true },
    });
    if (sp)
    res.status(400).json({
    message: { msgBody: "oder đã tồn tại", msgError: true },
    });
    else {
    const newoder = new oder({  TenKH, Diachi,Sdt,Mail,Masp,TenSP,Gia,Soluong});
    newoder.save((err) => {
    if (err)
    res.status(500).json({
    message: { msgBody: "Error", msgError: true },
    });
    else
    res.status(200).json({
    message: { msgBody: "them oder Thanh Cong", msgError: false },
    });
    });
    }
    });
    });


    oderouter.get("/getoder", (request, response) => {
        oder.collection.find({}).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    });


//     sanphamrouter.delete('/deleteSanpham/:id', function(req, res, next) {
//         SanPham.findByIdAndRemove(req.params.id, (err, doc) => {
//             if (!err) {
//                 res.redirect('/users/list');
//             } else {
//                 console.log('Failed to Delete user Details: ' + err);
//             }
//         });
//     })

    

//     sanphamrouter.get('/getSanpham/:id', function (req, res, next) {
//         sanpham.findById(req.params.id, function(err, todo){
//           if(err) res.send(err);
//           res.json(todo);
//         });
//       });

//      // pagination
// sanphamrouter.get('/news/:page', (req, res, next) => {
//     let perPage = 1; // số lượng sản phẩm xuất hiện trên 1 page
//     let page = req.params.page || 1; 
  
//     sanpham
//       .find() // find tất cả các data
//       .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
//       .limit(perPage)
//       .exec((err, products) => {
//         sanpham.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
//           if (err) return next(err);
//            res.send(products) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
//         });
//       });
//   });


     module.exports = oderouter;    